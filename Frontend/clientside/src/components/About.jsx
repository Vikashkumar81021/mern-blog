import React from 'react'
import "../App.css"
function About() {
  return (
    <>
       <header>
        <h1>About Us</h1>
    </header>

    <section>
        <h1>Our Story</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vehicula sapien vitae metus scelerisque hendrerit. Nullam quis justo vel neque gravida ultrices eu eget turpis.</p>

        <h1>Our Team</h1>
        <div class="team-member">
            <img src="team-member1.jpg" alt="Team Member 1"/>
            <div>
                <h3>John Doe</h3>
                <p>Co-Founder</p>
            </div>
        </div>

        <div class="team-member">
            <img src="team-member2.jpg" alt="Team Member 2"/>
            <div>
                <h3>Rohit</h3>
                <p>Web Developer</p>
            </div>
        </div>

        

    </section>
    </>
  )
}

export default About
