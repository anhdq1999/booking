const categoriesConstants = {
  GETALL_CONSTANTS: {
    action: 'GET_ALL_CATEGORY',
    message: {
      success: 'Get all categories successfully',
      failure: 'Get all categories failure',
    },
  },
  GETALL_DELETED_CONSTANTS: {
    action: 'GET_ALL_DELETED_CATEGORY',
    message: {
      success: 'Get all deleted categories successfully',
      failure: 'Get all deleted categories failure',
    },
  },
  GETONE_CONSTANTS: {
    action: 'Get one by id',
    message: {
      success: 'Get one categories successfully',
      failure: 'Get one categories failure',
    },
  },
  CREATE_CONSTANTS: {
    action: 'CREATE_CATEGORY',
    message: {
      success: 'Create categories successfully',
      failure: 'Create categories failure',
    },
  },
  UPDATE_CONSTANTS: {
    action: 'UPDATE_CATEGORY',
    message: {
      success: 'Update categories successfully',
      failure: 'Update categories failure',
    },
  },
  DELETE_CONSTANTS: {
    action: 'DELETE_CATEGORY',
    message: {
      success: 'Delete categories successfully',
      failure: 'Delete categories failure',
    },
  },
  REMOVE_CONSTANTS: {
    action: 'REMOVE_CATEGORY',
    message: {
      success: 'Remove categories successfully',
      failure: 'Remove categories failure',
    },
  },
  RESTORE_CONSTANTS: {
    action: 'RESTORE_CATEGORY',
    message: {
      success: 'Restore categories successfully',
      failure: 'Restore categories failure',
    },
  },
};
module.exports = categoriesConstants;
