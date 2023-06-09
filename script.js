function Header() {
  return (
    <header>
      <nav>
        <img src="react.png" className="nav-img"></img>
        <ul className="nav-items">
          <li>Demo</li>
          <li>Download</li>
          <li>Contacts</li>
        </ul>
      </nav>
    </header>
  )
}

function Page() {
  return (
    <div>
      <Header />
      <MainContent />
      <Footer />
    </div>
  )
}

function MainContent() {
  return (
    <div>
      <h2>Top *5* Facts About React:</h2>
      <ol>
        <li>React is a free and open-source front-end JavaScript library for building user interfaces based on components. It is maintained by Meta and a community of individual developers and companies. React can be used to develop single-page, mobile, or server-rendered applications with frameworks like Next.js</li>
        <li>Many big giant corporate companies have started using react native for their app development, like Walmart, UberEats, Bloomberg, Discord,F8 , Discovery VR, and many other</li>
        <li>React has gained widespread adoption in the web development community due to its ease of use, efficiency, and versatility. React's declarative syntax and component-based architecture allow developers to create reusable UI components and manage state more efficiently.</li>
        <li>Today, it continues to be a go-to choice for both beginners and developers, and despite the emergence of new technologies, companies tend to hire React. js developers for their business needs. In this article, we'll discuss the key reasons why React. js is still so popular in 2023.</li>
        <li>React is slightly faster than Angular because it's a library and not a framework-platform, like Angular. However, the difference between the startup and running speed isn't significant. Overall, if you are building a small application, React is definitely a better choice.</li>
      </ol>
    </div>
  )
}

function Footer() {
  return (
    <small style={{ bottom: "20px", position: "fixed" }}>
      &copy; 2023 Sasho's development. All rights reserved.
    </small>
  )
}

ReactDOM.render(<Page />, document.getElementById('root'));