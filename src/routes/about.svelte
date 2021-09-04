<script>
    import Quota from "../components/Quota.svelte";
    import IndexMeta from '../components/IndexMeta.svelte';
    const title = "SHIJIE ZHOU | About";
    const quote = "Every person has two education, one which he receives from other, and one, more important, which he gives himself.";
    const brief = "— Edward Gibbon, British historian";
</script>

<svelte:head>
  <title>{title}</title>
  <IndexMeta />
</svelte:head>

<Quota {brief} {quote} title="About:"/>

<style>
    .profile {
        float: right;
        width: 100px;
        height: 100px;
    }
</style>

<p>
  <img alt="profileImage" class="profile" src="/profile/profile.jpg">Shijie Zhou studies at University of California, San Diego in the Interdisciplinary Computer in Arts. He is also the member for design and construct web developer at the Worldview Project organization. Currently, he is working in Code 9, Pte Ltd software engineer. He obtains Associate degree in Green River College, and also finish the B.A.
  degree at UCSD. He gained experience in media use and computer art. He also familiar with web design and customize
  selling pages on ebay which promote stuffs at leisure time.
</p>

<ul>
  <li>🚀 Developer, Engineer, Innovation Technology amateur.</li>
  <li>🍟 Creating, running and funding new software.</li>
  <li>🥷🏻 Chanllenges of Entreprenuership. </li>
  <li>📈 Stock and Crypto Currecy investor.</li>
</ul>