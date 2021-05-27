import React from 'react'

export  const SocialLinks = () => {
  return (
    <div>
      <ul className="social-media-list">

      <li><a href="http://www.twitter.com"><img src="http://assets.sendible.com.s3.amazonaws.com/blog/images/key/twitter.png" /> </a></li>
      <li><a href="http://www.instagram.com"><img src="http://assets.sendible.com.s3.amazonaws.com/blog/images/17-dec/sm-icons-instagram-app-icon.png" /> </a></li>
      <li><a href="http://www.facebook.com"><img src="https://f.hubspotusercontent30.net/hubfs/2235233/blog-import/2020/20-08-Aug/sm-icons-facebook-logo.png" /> </a></li>

      </ul>

    <style jsx>{`
      ul.social-media-list img{
        height: 30px;
        width: 30px;
        padding: 5px;
      }
      ul.social-media-list {
        list-style-type: none;
        margin: 0;
        padding: 0;
      }
      ul.social-media-list li {
        display: inline-block;
    }
    `}

    </style>
    </div>
  )
}
