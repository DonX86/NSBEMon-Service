# NSBEmon Service Application

The nsbemon service application is a graphql api, which is backed by dynamodb as a data store.

## Setup

### Installing dependencies

```
npm install
```

### Environment Variables

Export the following variables in your environment

```
export NSBEMON_AWS_ACCESS_KEY_ID="<your-access-key-id>"
export NSBEMON_AWS_SECRET_ACCESS_KEY="<your-secret-access-key"
export NSBEMON_AWS_REGION="us-west-1"
export REACT_APP_NSBEMON_API_URL="http://localhost:4000"
export JWT_SECRET="saltynsbemon" # Probably choose something different
export NSBEMON_VIEWER='{"id": "0c519133-ed8d-4255-bdd0-1eb8ddb80093","isLeader":false,"username":"a74796ff-4991-46eb-b38c-da45dc1142c7"}' # A viewer for development
```

### Starting Service

```
npm start
```
