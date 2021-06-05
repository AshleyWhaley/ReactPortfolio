function Portfolio(title, description, website, github) {
    this.title = title;
    this.description = description;
    this.website = website;
    this.github = github;
  }
  
  const takeHike = new Portfolio(
      "Take A Hike",
      "Web application allows the user to view and save hikes in a chosen location, displays the weather for the area hiking in",
      "https://tranquil-scrubland-42356.herokuapp.com/",
      "https://github.com/AshleyWhaley/Take-A-Hike.git"
  );
  
  const techBlog = new Portfolio(
      "Tech Blog",
      "This application is where developers, nerds, and other various tech industry people can post about what they are currently working on or what currently interest them.",
      "https://damp-beyond-61358.herokuapp.com/",
      "https://github.com/AshleyWhaley/TechBlog.git"
  );
  
  const dejaBrew = new Portfolio(
      "Deja Brew",
      "Signup or login to discover new breweries and interact with other users",
      "https://guarded-bayou-67190.herokuapp.com/",
      "https://github.com/AshleyWhaley/Deja-Brew.git"
  );
  
  const cureBore = new Portfolio(
      "Cure For Boredom",
      "Distract yourself from the pandemic with a dashboard of fun entertainment",
      "https://nathanjamis.github.io/CureForBoredom/",
      "https://github.com/AshleyWhaley/CureForBoredom.git"
  );
  
  let projects = [takeHike, techBlog, dejaBrew, cureBore];
  
  export default projects;