<script>
    import Nav from '../components/Nav.svelte';
    import { navigations } from '../config/index';
    import GoogleAnalytics from "sapper-google-analytics/GoogleAnalytics.svelte"
    import { stores } from "@sapper/app"

    let ga_measurment_id = "UA-149847604-1";

    export let segment;
</script>

<style lang="scss">
  .app-container {
    flex: 1 1 auto;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    max-width: 100%;
    position: relative;
  }

    main {
      position: relative;
      max-width: 768px;
      padding: 20px;
      margin: 0 auto;
      box-sizing: border-box;
      flex: 1 1 auto;
      height: 100%;
      width: 100%;
      @media (max-width: 414px) {
        padding: 10px;
      }
    }


  .footer-container {
        font-size: 10px;

        align-items: center;
        display: flex;
        flex: 0 1 auto !important;
        flex-wrap: wrap;
        padding: 6px 16px;
        position: relative;
        transition-duration: .2s;
        transition-property: background-color, left, right;
        transition-timing-function: cubic-bezier(.4, 0, .2, 1);
    }
</style>

<div class="app-container">
  <header>
    <GoogleAnalytics id={ga_measurment_id} {stores}/>
    <Nav {navigations} {segment}/>
  </header>
  <main>
    <slot></slot>
  </main>
  <footer class="footer-container">Created by&nbsp;Shijie Zhou 2015 - &copy; { new Date().getFullYear() }</footer>
</div>
