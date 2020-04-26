import { Component, OnInit } from '@angular/core';
import {CandidatesService} from "../../../pages/candidates/candidates.service";
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

class ImageSnippet {
  pending: boolean = false;
  status: string = 'init';

  constructor(public src: string, public file: File) {}
}

@Component({
  selector: 'image-upload',
  templateUrl: 'image-upload.component.html',
  styleUrls: ['image-upload.component.scss']
})
export class ImageUploadComponent {

  selectedFile: ImageSnippet;
  selectedFileName: string;
  attachments: ImageSnippet[] = [];

  constructor(private candidatesService: CandidatesService, private modalService: NgbModal){}

  private onSuccess() {
    this.selectedFile.pending = false;
    this.selectedFile.status = 'ok';
  }

  private onError() {
    this.selectedFile.pending = false;
    this.selectedFile.status = 'fail';
    this.selectedFile.src = '';
  }

  processFile(imageInput: any) {
    const file: File = imageInput.files[0];
    const reader = new FileReader();

    reader.addEventListener('load', (event: any) => {

      this.selectedFile = new ImageSnippet(event.target.result, file);
      this.attachments.push(this.selectedFile);

      this.selectedFile.pending = true;
      this.candidatesService.uploadImage(this.selectedFile.file).subscribe(
        (res) => {
          this.onSuccess();
        },
        (err) => {
          this.onError();
        })
    });

    reader.readAsDataURL(file);
  }

  removeAttachment(index) {
    this.attachments.splice(index, 1);
  }

  openFile({src, file}, content) {
    this.selectedFileName = file.name;
    this.modalService.open(content, { size: "xl" });
    // window.open(src, '_blank');
  }
}
