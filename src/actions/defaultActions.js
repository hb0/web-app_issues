export const updateInfrastructureView = (update) => {
  return {
    type: 'UPDATE_INFRASTRUCTURE_VIEW',
    update
  }
}

export const updateDatasetsView = (update) => {
  return {
    type: 'UPDATE_DATASETS_VIEW',
    update
  }
}
