System.register(["breeze-client"], function (_export) {
  "use strict";

  var breeze, dataService, entityManager, memberTypeConfig, memberType, repositoryTypeConfig, repositoryType;
  _export("createEntityManager", createEntityManager);

  function createEntityManager() {
    return entityManager.createEmptyCopy();
  }
  return {
    setters: [function (_breezeClient) {
      breeze = _breezeClient["default"];
    }],
    execute: function () {
      dataService = new breeze.DataService({
        serviceName: "https://api.github.com/",
        hasServerMetadata: false
      });
      entityManager = new breeze.EntityManager({ dataService: dataService });
      memberTypeConfig = {
        shortName: "Member",

        dataProperties: {
          id: { dataType: breeze.DataType.Int64, isPartOfKey: true },
          login: {},
          avatar_url: {},
          url: {},
          html_url: {},
          followers_url: {},
          following_url: {},
          gists_url: {},
          starred_url: {},
          subscriptions_url: {},
          organizations_url: {},
          repos_url: {},
          events_url: {},
          received_events_url: {},
          type: {},
          site_admin: { dataType: breeze.DataType.Boolean }
        }
      };
      memberType = new breeze.EntityType(memberTypeConfig);
      repositoryTypeConfig = {
        shortName: "Repository",

        dataProperties: {
          id: { dataType: breeze.DataType.Int64, isPartOfKey: true },
          name: {},
          full_name: {},
          description: {},
          "private": { dataType: breeze.DataType.Boolean },
          fork: { dataType: breeze.DataType.Boolean },
          url: {},
          html_url: {},
          clone_url: {},
          git_url: {},
          ssh_url: {},
          svn_url: {},
          mirror_url: {},
          homepage: {},
          language: {},
          forks_count: { dataType: breeze.DataType.Int32 },
          stargazers_count: { dataType: breeze.DataType.Int32 },
          watchers_count: { dataType: breeze.DataType.Int32 },
          size: { dataType: breeze.DataType.Int32 },
          default_branch: {},
          open_issues_count: { dataType: breeze.DataType.Int32 },
          has_issues: { dataType: breeze.DataType.Boolean },
          has_wiki: { dataType: breeze.DataType.Boolean },
          has_pages: { dataType: breeze.DataType.Boolean },
          has_downloads: { dataType: breeze.DataType.Boolean },
          pushed_at: { dataType: breeze.DataType.DateTime },
          created_at: { dataType: breeze.DataType.DateTime },
          updated_at: { dataType: breeze.DataType.DateTime } }
      };
      repositoryType = new breeze.EntityType(repositoryTypeConfig);



      entityManager.metadataStore.addEntityType(memberType);
      entityManager.metadataStore.addEntityType(repositoryType);
    }
  };
});