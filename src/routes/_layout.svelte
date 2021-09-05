<script>
  import { onMount } from 'svelte';
  import Nav from '../components/Nav.svelte';
  import { navigations } from '../config/index';
  import GoogleAnalytics from 'sapper-google-analytics/GoogleAnalytics.svelte';
  import { stores } from '@sapper/app';
  import { cdnPath } from '@/store/store';
  import { fetchCurrentAddress } from '@/store/api';

  let ga_measurment_id = 'UA-149847604-1';

  onMount(async () => {
    await fetchCurrentAddress().then((r) => {
      cdnPath.set(r);
      console.log(r);
    });
  });

  export let segment;
</script>

<div class="app-container">
  <header>
    <GoogleAnalytics id={ga_measurment_id} {stores} />
    <!-- Begin 33Across SiteCTRL -->
    <script>
      var Tynt = Tynt || [];
      Tynt.push('c9ggSSzJar67HdaKjGFx_2');
      (function () {
        var h,
          s = document.createElement('script');
        s.src = 'https://cdn.tynt.com/ti.js';
        h = document.getElementsByTagName('script')[0];
        h.parentNode.insertBefore(s, h);
      })();
    </script>
    <!-- End 33Across SiteCTRL -->
    <meta name="robots" content="noarchive" />
    <Nav {navigations} {segment} />

    <!-- Begin posthog SiteCTRL -->
    <script>
      !(function (t, e) {
        var o, n, p, r;
        e.__SV ||
          ((window.posthog = e),
          (e._i = []),
          (e.init = function (i, s, a) {
            function g(t, e) {
              var o = e.split('.');
              2 == o.length && ((t = t[o[0]]), (e = o[1])),
                (t[e] = function () {
                  t.push([e].concat(Array.prototype.slice.call(arguments, 0)));
                });
            }
            ((p = t.createElement('script')).type = 'text/javascript'),
              (p.async = !0),
              (p.src = s.api_host + '/static/array.js'),
              (r = t.getElementsByTagName('script')[0]).parentNode.insertBefore(
                p,
                r
              );
            var u = e;
            for (
              void 0 !== a ? (u = e[a] = []) : (a = 'posthog'),
                u.people = u.people || [],
                u.toString = function (t) {
                  var e = 'posthog';
                  return (
                    'posthog' !== a && (e += '.' + a), t || (e += ' (stub)'), e
                  );
                },
                u.people.toString = function () {
                  return u.toString(1) + '.people (stub)';
                },
                o =
                  'capture identify alias people.set people.set_once set_config register register_once unregister opt_out_capturing has_opted_out_capturing opt_in_capturing reset isFeatureEnabled onFeatureFlags'.split(
                    ' '
                  ),
                n = 0;
              n < o.length;
              n++
            )
              g(u, o[n]);
            e._i.push([i, s, a]);
          }),
          (e.__SV = 1));
      })(document, window.posthog || []);
      posthog.init('Y0ZSmyFb3y8qj2AqwZBYNKa-xoRH4qgzpoKu_mH-9Sk', {
        api_host: 'https://app.posthog.com',
      });

      // <!-- Pinterest Tag -->
      !function(e){if(!window.pintrk){window.pintrk = function () {
      window.pintrk.queue.push(Array.prototype.slice.call(arguments))};var
        n=window.pintrk;n.queue=[],n.version="3.0";var
        t=document.createElement("script");t.async=!0,t.src=e;var
        r=document.getElementsByTagName("script")[0];
        r.parentNode.insertBefore(t,r)}}("https://s.pinimg.com/ct/core.js");
      pintrk('load', '2614141578030', {em: '<user_email_address>'});
      pintrk('page');
      // <!-- end Pinterest Tag -->

      pintrk('track', 'checkout', {
      value: 100,
      order_quantity: 1,
      currency: 'USD'
      });
    </script>
    <!-- Google AdSense -->
    <!-- <script data-ad-client="ca-pub-3054816686501642" async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script> -->
    <!-- End posthog SiteCTRL -->
  </header>

  <main>
    <slot />
  </main>
  <footer class="footer-container">
    Created by&nbsp;Shijie Zhou 2015 - &copy; {new Date().getFullYear()}
  </footer>
</div>

<style lang="scss" global>
  @import '../style/global.scss';
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
    transition-duration: 0.2s;
    transition-property: background-color, left, right;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  }
</style>
