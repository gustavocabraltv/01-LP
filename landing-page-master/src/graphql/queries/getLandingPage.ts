const GET_LANDING_PAGE = /* GraphQL */ `

query GET_LANDING_PAGE{
    landingPage{
      aboutSection{
        title
        description
      }
      logo{
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