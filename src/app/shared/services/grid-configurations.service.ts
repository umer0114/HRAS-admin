import {Injectable} from '@angular/core';

const defaultConfigurations = {
  actions: {
    add: false,
    edit: false,
    delete: false,
    columnTitle: 'Grid Actions',
  },
};

const defaultConfigurationsForActionButtons = {
  actions: {
    position: 'right',
  },
  edit: {
    editButtonContent: '<i class="ion-edit" title="Edit"></i>',
    saveButtonContent: '<i class="ion-checkmark" style="font-size: 24px;color: blue;" title="Create"></i>',
    cancelButtonContent: '<i class="ion-android-cancel" style="font-size: 28px;color: red;" title="Cancel"></i>',
  },
  add: {
    addButtonContent: '<i class="ion-plus" title="Add"></i>',
    createButtonContent: '<i class="ion-checkmark" style="font-size: 24px;color: blue;" title="Create"></i>',
    cancelButtonContent: '<i class="ion-android-cancel" style="font-size: 28px;color: red;" title="Cancel"></i>',
  },
  delete: {
    deleteButtonContent: '<i class="ion-android-cancel" style="font-size: 28px;color: red;" title="Cancel"></i>',
  },
};

@Injectable({
  providedIn: 'root',
})

export class GridConfigurationsService {

  constructor() {
  }

  getConfigurations() {
    return {
      candidates: {
        ...defaultConfigurations,
        columns: {
          firstName: {
            title: 'First Name',
          },
          lastName: {
            title: 'Last Name',
          },
          category: {
            title: 'Category',
          },
          city: {
            title: 'Current City',
          },
          employmentStatus: {
            title: 'Employment Status',
          },
          resume: {
            title: 'Current Resume',
          },
        },
      },
      jobs: {
        ...defaultConfigurations,
        columns: {
          status: {
            title: 'Status',
          },
          postingDate: {
            title: 'Posting Date',
          },
          category: {
            title: 'Category',
          },
          location: {
            title: 'Location',
          },
          requiredExperience: {
            title: 'Required Experience',
          },
          availableVacancies: {
            title: 'Available Vacancies',
          },
        },
      },
      markingCriteria: {
        ...defaultConfigurationsForActionButtons,
        columns: {
          id: {
            title: 'ID',
            filter: false,
          },
          criteriaName: {
            title: 'Criteria Name',
          },
          totalPoints: {
            title: 'Total Points',
          },
        },
      },
      shortlistedCandidates: {
        ...defaultConfigurations,
        columns: {
          firstName: {
            title: 'First Name',
          },
          lastName: {
            title: 'Last Name',
          },
          employmentStatus: {
            title: 'Employment Status',
          },
          resume: {
            title: 'Current Resume',
          },
        },
      },
      interviews: {
        ...defaultConfigurations,
        columns: {
          selected: {
            editor: {
              type: 'checkbox',
            },
          },
          candidateName: {
            title: 'Candidate Name',
          },
          interviewerName: {
            title: 'InterviewerName',
          },
          interviewCategory: {
            title: 'Interview Category',
          },
          interviewType: {
            title: 'Interview Type',
          },
          scheduledDate: {
            title: 'Scheduled date',
          },
        },
      },
    };
  }
}
