const  ProjectBox = ({projectPhoto, projectName}) => {
    const desc = {
      TindogDesc : "This website is a landing page of Tinder but for dogs. It is a responsive website which was made to understand Bootstrap. I also learned how to host my project on Github and then how to deploy that project using Github pages.",
      TindogGithub : "https://github.com/DevanshSahni/tindog",
      TindogWebsite : "https://devanshsahni.github.io/tindog/",
  
      RogFreeDesc : "A website that shows you over seven specialized yoga postures for specific diseases or health problems. This was a group project made in a team of two for a 36-hour-long online hackathon named Hackodisha 2.0.",
      RogFreeGithub : "https://github.com/DevanshSahni/Rog-Free",
      RogFreeWebsite : "https://devanshsahni.github.io/Rog-Free/",
  
      NewsletterDesc:"A newsletter signup site made using Mailchimp API where the signups can be monitored from the MailChimp account. This project was made to understand API integration, environment variables and vercel deployment.",
      NewsletterGithub:"",
      NewsletterWebsite:"https://newsletter-signup-teal.vercel.app/",
      
      WigglesDesc:"An innovative pet management web app enabling pet parents to create unique pet IDs, securely store and share vaccination records, and generate QR codes for pet profiles, enhancing safety.",
      WigglesGithub:"https://github.com/DevanshSahni/Wiggles",
      WigglesWebsite:"https://wiggles.vercel.app/",
  
    }


    const Projects = () => {
        return (
          <div>
            <h1 className='projectHeading'>My <b>Projects</b></h1>
            <div className='project'>
              <ProjectBox projectPhoto={WigglesImage} projectName="Wiggles" />
              <ProjectBox projectPhoto={NewsletterImage} projectName="Newsletter" />
              <ProjectBox projectPhoto={RogfreeImage} projectName="RogFree" />
              <ProjectBox projectPhoto={TindogImage} projectName="Tindog" />
              
            </div>
      
          </div>
        )


<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <link rel="icon" href="images/favicon.png" />
    <meta name="viewport"    content="width=device-width, initial-scale=1" />
    <meta name="theme-color" content="#000000" />
    <meta name="author" content="Joshua Castaneda">
    <meta name="description" content="Personal portfolio made using Reactjs"/>
    <meta property="og:title" content="Joshua Castaneda Portfolio">
    <meta property="og:type" content="Website">
    <meta property="og:url" content="https://portfolio-devanshsahni.vercel.app/">
    <meta property="og:image" content="https://raw.githubusercontent.com/DevanshSahni/Portfolio/main/public/images/WebsiteImage.png">

    <title>Joshua Castaneda</title>
    <link href="https://fonts.googleapis.com/css2?family=Raleway:wght@100;400;500;700&display=swap" rel="stylesheet">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  </head>
  <body>
    <noscript>You need to enable JavaScript to run this app.</noscript>
    <div id="root">
    </div>
    <!--
      This HTML file is a template.
      If you open it directly in the browser, you will see an empty page.

      You can add webfonts, meta tags, or analytics to this file.
      The build step will place the bundled scripts into the <body> tag.

      To begin the development, run `npm start` or `yarn start`.
      To create a production bundle, use `npm run build` or `yarn build`.
    -->
  </body>
</html>
