const GET_LANDING_PAGE = /* GraphQL */ `

query GET_LANDING_PAGE{
    landingPage{
      Logo{
        alternativeText
        url
      }
      header{
        title
        description
      }
    }
  }

`

export default GET_LANDING_PAGE;