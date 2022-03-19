import {useQuery, gql} from '@apollo/client'

const GetLandingPage = gql`
query GET_LANDING_PAGE{
  landingPage{
    header{
      title
      description
    }
  }
}

`


export default GetLandingPage;