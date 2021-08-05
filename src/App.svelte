<script lang="ts">
  import {onMount} from 'svelte';
  import {fade, fly} from 'svelte/transition';
  import {flip} from 'svelte/animate';
  import {tsvParse} from 'd3-dsv';
  import Tooltip from './Tooltip.svelte';

  const themes = [
    'Zines using visualization',
    'Zines about data',
    'Zines about visualization ',
    'Zines about you',
    'Aligned with form',
  ];

  const themeDescriptions = {
    'Zines using visualization': 'Zines that use visualization in any way',
    'Zines about data': 'Zines whose main focus is on describing data or using data to tell a story',
    'Zines about visualization ': 'Zines whose topic is data visualization (or adjacent topics)',
    'Zines about you': 'Zines that are personal (perzines)!',
    'Aligned with form':
      'Zines whose content "rhymes" with the form of the zine (like our zine about our paper)',
  };
  let counts = themes.reduce((acc, row) => {
    acc[row] = 0;
    return acc;
  }, {} as any);

  let sorts = ['by author', 'by title'];
  let selectedSort = 'by title';
  let selectedTheme;

  let data = [];
  let allData = [];
  onMount(async () => {
    const res = await fetch('./assets/zine-list.tsv');
    const txt = await res.text();
    allData = tsvParse(txt);
    sortAndFilter(undefined);
    counts = data.reduce((acc, row) => {
      themes.forEach((theme) => {
        acc[theme] = (acc[theme] || 0) + (row[theme] === 'Yes' ? 1 : 0);
      });
      return acc;
    }, {} as any);
  });
  function sortAndFilter(filterVal) {
    selectedTheme = filterVal;
    data = allData
      .filter((x) => {
        return selectedTheme ? x[selectedTheme] === 'Yes' : true;
      })
      .sort((a, b) => {
        switch (selectedSort) {
          case 'by author':
            return a['Author'].localeCompare(b['Author']);
          case 'by title':
          default:
            return a['Name'].localeCompare(b['Name']);
            break;
            break;
        }
      });
  }
</script>

<main>
  <div class="background" />
  <div class="main-container">
    <h1>On the Potential of Zines as a Medium for Visualization</h1>
    <h3>IEEE Transactions on Visualization and Computer Graphics 2021 - Short Paper</h3>
    <h3>By <a href="http://mcnutt.in/">Andrew McNutt</a></h3>

    <div>
      <p>
        Data visualizations come in lots of shapes, sizes, contexts, and forms. Recently there have been
        developments that include visualization on <a
          href="https://www.microsoft.com/en-us/research/uploads/prod/2018/08/GlanceableVis-InfoVis2018.pdf"
          target="_blank">smart watches</a
        >, in <a href="https://data-gifs.github.io/" target="_blank">gifs</a>, in
        <a href="https://aviz.fr/~bbach/datacomics/" target="_blank">comics</a>, in a whole host of additional
        contexts. Concurrent with this medium explosion there has been a growing interest in visualization
        research to consider issues inclusivity,
        <a href="http://giorgialupi.com/data-humanism-my-manifesto-for-a-new-data-wold" target="_blank"
          >humanism</a
        >, and
        <a href="https://data-feminism.mitpress.mit.edu/" target="_blank">feminism</a>.
      </p>

      <p>
        Surprisingly, these twin interests have not yet converged (at least not substantially) in the humble
        medium of the zine! Zines are a form of small-circulation self-produced publication often akin to a
        magazine. This free-form medium has a long history and has been used as means for personal or intimate
        expression, as a way for marginalized people to describe issues that are important to them, and as a
        venue for graphical experimentation. So it would seem then that zines would make an ideal vehicle for
        visualization!
      </p>
    </div>
    <div class="center-display">
      <a href="assets/printable-zine.pdf" target="_blank">
        <img src="assets/zine-cover.png" alt="cover of the zine describing the paper" />
      </a>
      <div class="description">
        <p>
          <span class="yet">Yet</span>, there has been little work combining visualization and zines. So, in
          our <a href="http://ieeevis.org/year/2021/welcome">VIS 2021 </a> Short paper ``On the Potential of
          Zines as Medium for Visualization'', we set out to explore the potential of this intersection by
          analyzing examples of zines that use data graphics (to demonstrate that this is a real thing that
          has occured in the "wild") and by describing the pedagogical value that they can have in a
          visualization classroom (to show that they can be used in realistic narrative visualization
          situations), in particular the
          <a href="https://capp-30239-winter-2021.netlify.app/"
            >Winter 2021 edition of our Data Visualization for Public Policy</a
          >
          course at UChicago (if you are curious a number of students have graciously shared their projects, which
          you can see
          <a href="https://capp-30239-winter-2021.netlify.app/#staticShowcase">here</a> (although not all of
          them are zines!)). In our survey of zines using visualization, we identified
          <span class="yet">44</span>
          zines that use visualization in some way (although visualization is
          <i>quite</i> loosely defined). In the interest of transparency we provide a list of these zines below.
        </p>
      </div>
    </div>
    <div>
      <p>
        You can read more about this work in the paper (which is freely available <a
          href="https://arxiv.org/abs/2108.02177">here</a
        >). But, if reading papers isn't your thing, we've also produced a zine describing the paper. You can
        view a
        <a href="assets/printable-zine.pdf">printer friendly version</a> or a
        <a href="assets/web-zine.pdf">web readable version</a>. You don't need to do anything special to print
        it, any old color printer will do.
      </p>
      <p />

      <p>
        The world of zines is a big place! There are doubtless countless more zines out there that feature
        charts or maps or graphs or other sorts of visualizations. If there are other zines featuring
        visualizations that you know about, please let us know either via a <a
          href="https://github.com/mcnuttandrew/zine-potential/issues/new/choose">github issue</a
        > or send an email to mcnutt at uchicago dot edu.
      </p>
      <div>
        <h3>Zine List</h3>
        <span>Sort by</span>
        <select bind:value={selectedSort} on:change={() => sortAndFilter(selectedTheme)}>
          {#each sorts as sort}
            <option value={sort}>
              {sort}
            </option>
          {/each}
        </select>
      </div>
      <div>
        <span>Show me just:</span>
        <div class="flex">
          {#each themes as theme, idx}
            <Tooltip title={themeDescriptions[theme]}>
              <div class="theme theme-{idx}" on:click={() => sortAndFilter(theme)}>
                {theme} ({counts[theme]})
              </div>
            </Tooltip>
          {/each}
        </div>
        <button on:click={() => sortAndFilter(undefined)}>nevermind! clear filters</button>
      </div>
      <div class="flex-down">
        {#each data as row, index (row)}
          <div class="flex-down zine-row" animate:flip in:fade out:fly={{x: 10}}>
            <div class="zine-title">
              {#if row['URL']}
                <a href={row['URL']}>{row['Name']}</a>
              {:else}
                {row['Name']}
              {/if}
            </div>
            <div>
              by {row['Author']}
              — {row['Date']}
            </div>
            <div>
              Themes:
              {#each themes as theme, idx}
                {#if row[theme] && row[theme] === 'Yes'}
                  <span class="theme theme-{idx}" on:click={() => sortAndFilter(theme)}>{theme}</span>
                {/if}
              {/each}
            </div>
          </div>
        {/each}
      </div>
    </div>
  </div>
</main>

<style>
  main {
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    height: 100%;
  }

  .flex {
    display: flex;
  }

  .background {
    /* http://www.heropatterns.com/ */
    background-color: #ffffff;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='52' height='52' viewBox='0 0 52 52'%3E%3Cpath fill='%2376c4ff' fill-opacity='0.4' d='M0 17.83V0h17.83a3 3 0 0 1-5.66 2H5.9A5 5 0 0 1 2 5.9v6.27a3 3 0 0 1-2 5.66zm0 18.34a3 3 0 0 1 2 5.66v6.27A5 5 0 0 1 5.9 52h6.27a3 3 0 0 1 5.66 0H0V36.17zM36.17 52a3 3 0 0 1 5.66 0h6.27a5 5 0 0 1 3.9-3.9v-6.27a3 3 0 0 1 0-5.66V52H36.17zM0 31.93v-9.78a5 5 0 0 1 3.8.72l4.43-4.43a3 3 0 1 1 1.42 1.41L5.2 24.28a5 5 0 0 1 0 5.52l4.44 4.43a3 3 0 1 1-1.42 1.42L3.8 31.2a5 5 0 0 1-3.8.72zm52-14.1a3 3 0 0 1 0-5.66V5.9A5 5 0 0 1 48.1 2h-6.27a3 3 0 0 1-5.66-2H52v17.83zm0 14.1a4.97 4.97 0 0 1-1.72-.72l-4.43 4.44a3 3 0 1 1-1.41-1.42l4.43-4.43a5 5 0 0 1 0-5.52l-4.43-4.43a3 3 0 1 1 1.41-1.41l4.43 4.43c.53-.35 1.12-.6 1.72-.72v9.78zM22.15 0h9.78a5 5 0 0 1-.72 3.8l4.44 4.43a3 3 0 1 1-1.42 1.42L29.8 5.2a5 5 0 0 1-5.52 0l-4.43 4.44a3 3 0 1 1-1.41-1.42l4.43-4.43a5 5 0 0 1-.72-3.8zm0 52c.13-.6.37-1.19.72-1.72l-4.43-4.43a3 3 0 1 1 1.41-1.41l4.43 4.43a5 5 0 0 1 5.52 0l4.43-4.43a3 3 0 1 1 1.42 1.41l-4.44 4.43c.36.53.6 1.12.72 1.72h-9.78zm9.75-24a5 5 0 0 1-3.9 3.9v6.27a3 3 0 1 1-2 0V31.9a5 5 0 0 1-3.9-3.9h-6.27a3 3 0 1 1 0-2h6.27a5 5 0 0 1 3.9-3.9v-6.27a3 3 0 1 1 2 0v6.27a5 5 0 0 1 3.9 3.9h6.27a3 3 0 1 1 0 2H31.9z'%3E%3C/path%3E%3C/svg%3E");
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: 0;
  }
  .main-container {
    padding: 1em;
    max-width: 600px;
    margin: 0 auto;
    background: white;
    z-index: 1;
    overflow-y: auto;
  }

  h1 {
    font-size: 4em;
    text-transform: uppercase;
    font-style: italic;
    font-weight: bolder;
  }

  h3 {
    margin-bottom: 10px;
  }

  p {
    margin-top: 0;
  }
  button {
    background: none;
  }
  img {
    border: thin solid black;
  }

  .center-display {
    display: flex;
    align-items: center;
  }

  .description {
    padding: 0 10px;
  }

  .yet {
    font-size: 1.5em;
    font-weight: bolder;
    font-style: italic;
  }

  .zine-row {
    margin-top: 30px;
  }
  .zine-title {
    background: #6d7278;
    display: inline-block;
    font-size: 0.75em;
    color: white;
    padding: 10px;
    font-weight: bold;
    text-transform: uppercase;
  }
  a,
  a:visited {
    color: black;
    font-weight: bolder;
  }
  .zine-title a:visited,
  .zine-title a {
    color: white;
  }
  .theme {
    cursor: pointer;
    display: inline-block;
    font-size: 0.5em;
    /* color: white; */
    border-radius: 10px;
    padding: 5px;
    margin-right: 5px;
  }
  .theme-0 {
    background: #f9d2d2;
  }
  .theme-1 {
    background: #aac6da;
  }
  .theme-2 {
    background: #de8ed7;
  }
  .theme-3 {
    background: #efc083;
  }
  .theme-4 {
    background: #c0ca83;
  }

  @media (max-width: 640px) {
    .background {
      display: none;
    }
    .center-display {
      display: flex;
      flex-direction: column;
    }
    .main-container {
      max-width: undefined;
    }
    h1 {
      font-size: 2em;
    }
  }
</style>
