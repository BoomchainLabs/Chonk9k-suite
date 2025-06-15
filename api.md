# Users

Types:

- <code><a href="./src/resources/users/users.ts">User</a></code>
- <code><a href="./src/resources/users/users.ts">UserListMissionsResponse</a></code>
- <code><a href="./src/resources/users/users.ts">UserListReferralsResponse</a></code>

Methods:

- <code title="post /users">client.users.<a href="./src/resources/users/users.ts">create</a>({ ...params }) -> User</code>
- <code title="get /users/{userId}/missions">client.users.<a href="./src/resources/users/users.ts">listMissions</a>(userID) -> UserListMissionsResponse</code>
- <code title="get /users/{userId}/referrals">client.users.<a href="./src/resources/users/users.ts">listReferrals</a>(userID) -> UserListReferralsResponse</code>
- <code title="get /users/wallet/{address}">client.users.<a href="./src/resources/users/users.ts">retrieveByWallet</a>(address) -> User</code>

## Stakes

Types:

- <code><a href="./src/resources/users/stakes.ts">UserStake</a></code>
- <code><a href="./src/resources/users/stakes.ts">StakeListResponse</a></code>

Methods:

- <code title="post /users/{userId}/stakes">client.users.stakes.<a href="./src/resources/users/stakes.ts">create</a>(userID, { ...params }) -> UserStake</code>
- <code title="get /users/{userId}/stakes">client.users.stakes.<a href="./src/resources/users/stakes.ts">list</a>(userID) -> StakeListResponse</code>

# Missions

Types:

- <code><a href="./src/resources/missions.ts">Mission</a></code>
- <code><a href="./src/resources/missions.ts">MissionListResponse</a></code>

Methods:

- <code title="get /missions/{id}">client.missions.<a href="./src/resources/missions.ts">retrieve</a>(id) -> Mission</code>
- <code title="get /missions">client.missions.<a href="./src/resources/missions.ts">list</a>({ ...params }) -> MissionListResponse</code>

# Staking

Types:

- <code><a href="./src/resources/staking.ts">StakingVault</a></code>
- <code><a href="./src/resources/staking.ts">StakingListVaultsResponse</a></code>

Methods:

- <code title="get /staking/vaults">client.staking.<a href="./src/resources/staking.ts">listVaults</a>() -> StakingListVaultsResponse</code>

# Stats

Types:

- <code><a href="./src/resources/stats.ts">StatRetrieveResponse</a></code>

Methods:

- <code title="get /stats">client.stats.<a href="./src/resources/stats.ts">retrieve</a>() -> StatRetrieveResponse</code>

# Token

Types:

- <code><a href="./src/resources/token.ts">TokenRetrieveInfoResponse</a></code>

Methods:

- <code title="get /token/info">client.token.<a href="./src/resources/token.ts">retrieveInfo</a>() -> TokenRetrieveInfoResponse</code>
