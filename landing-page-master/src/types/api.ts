export type LogoProps = {
	alternativeText: string
	url: string
 }

 export type AboutProps = { 
	 title: string
	 description: string
 }

 export type HeaderProps = { 
	 title: string
     description: string
 }

export type LandingPageProps = {
	logo: LogoProps
    header: HeaderProps
	aboutSection: AboutProps

}
