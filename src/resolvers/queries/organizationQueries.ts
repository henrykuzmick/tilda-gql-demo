const organizationQueries = {
  organization: async (_, { id }) => {
    return null;
  },

  organizations: async (_, { workspace }) => {
    return [];
  },
};

export default organizationQueries;
