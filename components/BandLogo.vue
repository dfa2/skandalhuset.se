<template>
<div class="container-fluid ska-theme">
  <div class="content-wrapper">
    <header class="header-section text-center">
      <img src="/images/band-logo.svg" alt="Skandalhuset Logo" class="band-logo">
      <p class="lead">High-energy ska from Uppsala, Sweden</p>
    </header>

    <iframe width="560" height="315" src="https://www.youtube.com/embed/F6RRhUI55Nc?si=7pMXnyswnmwiKHLe" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
    
    <section class="gig-list text-center py-5">
      <h2>Upcoming Gigs</h2>
      <ul class="list-unstyled">
        <li>
          May 24, 2025 - Encore, Sundbyberg 
          <a href="https://www.facebook.com/share/1BcJQ1ie3D/?mibextid=wwXIfr" target="_blank" class="external-link">
            <i class="fas fa-external-link-alt"></i>
          </a>
        </li>
        <li>May 31, 2025 - Williams, Uppsala</li>
        <li>July 20, 2025 - Hope And Anchor, London</li>
        <li>August 16, 2025 - Grytpunken, Österfärnebo
          <a href="https://www.instagram.com/gryt.punken/" target="_blank" class="external-link">
            <i class="fas fa-external-link-alt"></i>
          </a>
        </li>
      </ul>
    </section>
    
    <section class="social-links text-center py-5">
      <h2>Follow Us</h2>
      <a href="https://instagram.com/skandalhuset.se" class="social-icon">
        <img src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png" alt="Instagram">
      </a>
      <a href="https://www.facebook.com/pages/Skandalhuset/143274325736407/" class="social-icon">
        <img src="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg" alt="Facebook">
      </a>
      <a href="https://open.spotify.com/artist/1BkJLVSQagwzAlFionGKIk?si=E5hn-_mQR2Km4hRaLg3ShA" class="social-icon">
        <img src="https://upload.wikimedia.org/wikipedia/commons/1/19/Spotify_logo_without_text.svg" alt="Spotify">
      </a>
      <a href="https://skandalhuset.bandcamp.com" class="social-icon">
        <img src="https://upload.wikimedia.org/wikipedia/commons/6/6a/Bandcamp-button-bc-circle-aqua.svg" alt="Bandcamp">
      </a>
      <a href="https://www.youtube.com/@skandalhuset" class="social-icon" target="_blank">
	<img src="https://upload.wikimedia.org/wikipedia/commons/0/09/YouTube_full-color_icon_%282017%29.svg" alt="YouTube">
      </a>
    </section>
    
    <section class="contact-links text-center py-5">
      <a href="mailto:info@skandalhuset.se" class="btn contact-btn">Book Us!</a>
      <a href="https://orcd.co/skandallaten" class="btn contact-btn">Pre-save Us on Spotify!</a>
    </section>
    <p class="version">{{ config.public.buildVersion }}
    </p>
  </div>
</div>
</template>

<script setup>
  const { data: allContent } = await useAsyncData('allContent', () => queryContent().find());
  console.log("Fetched all content:", allContent);
  
  const config = useRuntimeConfig()
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Anton&family=Oswald:wght@400;700&display=swap');
@import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css');

html, body {
    margin: 0;
    padding: 0;
    height: 100%;
    width: 100%;
    font-family: 'Oswald', sans-serif;
    background-color: black;
    color: white;
    text-align: center;
    overflow-x: hidden;
}
html {
    font-size: 16px;
    -webkit-text-size-adjust: 100%; /* Prevents zooming on mobile */
}

img {
    max-width: 100%;
    height: auto;
}

.ska-theme {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    background-image: url('/images/band.jpeg');
    background-size: cover;
    background-position: center;
    background-attachment: fixed;
    width: 100%;
    padding: 0px;
}

.gig-list ul {
    list-style: none;
    padding: 0;
    font-size: 1.5rem;
}

.external-link {
    margin-left: 5px;
    vertical-align: middle;
    color: lightgray;
    text-decoration: none;
}

.external-link i {
    font-size: 14px;
    color: lightgray;
}
.content-wrapper {
    max-width: 1200px;
    width: 100%;
    background: rgba(0, 0, 0, 0.3);
    padding: 20px;
    border-radius: 10px;
}

@media (max-width: 768px) {
    .content-wrapper {
	padding: 10px;
    }
}

.checkerboard-header, .checkerboard-footer {
    width: 100%;
    height: 75px;
    background-image:
	repeating-conic-gradient(
	    black 0deg 90deg, 
	    grey 90deg 180deg,
	    black 180deg 270deg,
	    grey 270deg 360deg
	);
    background-size: 50px 50px;
    position: fixed;
    left: 0;
    z-index: 1000;
}

.checkerboard-header {
    top: 0;
}

.checkerboard-footer {
    bottom: 0;
}

@media (max-width: 768px) {
    .checkerboard-header, .checkerboard-footer {
	display: none;
    }
}

.band-logo {
    max-width: 300px;
    width: 100%;
    margin-bottom: 20px;
}

.social-icon img {
    width: 50px;
    height: 50px;
    margin: 10px;
    transition: transform 0.3s ease;
}

.social-icon img:hover {
    transform: scale(1.2);
}

.external-link {
    margin-left: 5px;
    vertical-align: baseline;
    color: lightgray;
    text-decoration: none;
}

.external-link i {
    font-size: 14px;
    color: lightgray;
    vertical-align: middle;
}

.contact-btn {
    display: inline-block;
    padding: 10px 20px;
    margin: 10px;
    font-size: 1.2rem;
    text-transform: uppercase;
    color: black;
    background-color: white;
    border: 2px solid black;
    text-decoration: none;
}

.contact-btn:hover {
    background-color: yellow;
    color: black;
    border-color: yellow;
}

.gig-list ul {
    list-style: none;
    padding: 0;
    font-size: 1.5rem;
}

.version {
  color: gray;
  font-size: 0.75rem;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.version:hover {
  opacity: 1;
}

</style>
