import breeze from 'breeze-client';

var dataService = new breeze.DataService({
      serviceName: 'https://api.github.com/',
      hasServerMetadata: false 
  }),
      
  entityManager = new breeze.EntityManager({ dataService: dataService }),

  memberTypeConfig = {
    shortName: 'Member',

    dataProperties: {
      id: { dataType: breeze.DataType.Int64, isPartOfKey: true },
      login: { /* string type by default */ },
      avatar_url: { },
      //gravatar_id: ,
      url: { },
      html_url: { },
      followers_url: { },
      following_url: { },
      gists_url: { },
      starred_url: { },
      subscriptions_url: { },
      organizations_url: { },
      repos_url: { },
      events_url: { },
      received_events_url: { },
      type: { },
      site_admin:  { dataType: breeze.DataType.Boolean }
    }  
  },

  memberType = new breeze.EntityType(memberTypeConfig),

  repositoryTypeConfig = {
    shortName: 'Repository',  

    dataProperties: {
      id: { dataType: breeze.DataType.Int64, isPartOfKey: true },
      name: {},
      full_name: {},
      description: {},
      private: { dataType: breeze.DataType.Boolean },
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
      pushed_at: { dataType: breeze.DataType.Boolean },
      created_at: { dataType: breeze.DataType.Boolean },
      updated_at: { dataType: breeze.DataType.Boolean },
      // owner: {
      //   login: octocat,
      //   id: 1,
      //   avatar_url: https://github.com/images/error/octocat_happy.gif,
      //   gravatar_id: ,
      //   url: https://api.github.com/users/octocat,
      //   html_url: https://github.com/octocat,
      //   followers_url: https://api.github.com/users/octocat/followers,
      //   following_url: https://api.github.com/users/octocat/following{/other_user},
      //   gists_url: https://api.github.com/users/octocat/gists{/gist_id},
      //   starred_url: https://api.github.com/users/octocat/starred{/owner}{/repo},
      //   subscriptions_url: https://api.github.com/users/octocat/subscriptions,
      //   organizations_url: https://api.github.com/users/octocat/orgs,
      //   repos_url: https://api.github.com/users/octocat/repos,
      //   events_url: https://api.github.com/users/octocat/events{/privacy},
      //   received_events_url: https://api.github.com/users/octocat/received_events,
      //   type: User,
      //   site_admin: false
      // },
      // permissions: {
      //   admin: { dataType: breeze.DataType.Boolean },
      //   push: { dataType: breeze.DataType.Boolean },
      //   pull: { dataType: breeze.DataType.Boolean },
      // }
    }
  },

  repositoryType = new breeze.EntityType(repositoryTypeConfig);

       
entityManager.metadataStore.addEntityType(memberType);
entityManager.metadataStore.addEntityType(repositoryType);

export function createEntityManager() {
  return entityManager.createEmptyCopy();
}