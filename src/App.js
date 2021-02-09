/** @jsxImportSource @emotion/react */

import './App.css';
import logo from './images/doo_logo.svg';
import appleLogo from './images/apple_logo.svg';
import iphoneHero from './images/iphone_hero.jpg';
import green_square from './images/green_square.png';
import blue_zz from './images/blue_zz.png';
import pink_squares from './images/pink_squares.png';
import iphoneFrame from './images/new_copy.png';
import iphoneFramed from './images/green_better.png';
import iphonePrivacy from './images/privacy_01.jpg';
import iosPrivacy from './images/privacy_02_ios.jpg';
import askSiri from './images/feature_icon_siri.png';
import greenWidget from './images/feature_icon_widget.png';
import blueCollab from './images/feature_icon_collaboration.png';
import purpleAccessibility from './images/feature_icon_accessibility.png';
import yellowLock from './images/feature_icon_locking.png';
import yellowCloud from './images/feature_icon_icloud.png';
import React from 'react';
import { css } from '@emotion/react';

import headerStyles from './css.js';

// const pageHorizontalMargin = '100px';

// const headerStyles = css`
//   display: flex;
//   align-items: center;
//   background-color: white;
//   color: grey;
//   position: fixed;
//   z-index: 10;
//   width: 100%;
//   top: 0;
//   padding-bottom: 20px;

//   h1 {
//     margin: 0 auto 0 ${pageHorizontalMargin};
//     line-height: 60px;
//   }
//   a {
//     color: grey;
//     text-decoration: none;
//     padding: 0 10px;
//     font-weight: 100 bold;
//     font-size: 15px;
//     //padding-left: 1em;
//     margin: 0 80 0 auto;
//     border-bottom: 1px solid transparent;
//   }
//   .move-it {
//     padding-right: 100px;
//   }
// `;

const introStyle = css`
  h1 {
    font-size: 1em;
    line-height: 1em;
    letter-spacing: -0.06em;
    font-weight: 600;
    color: #383938;
    display: flex;
    justify-content: center;
    padding-top: 100px;
    font-weight: 550;
    font-size: 5em;
  }

  img {
    display: flex;
    justify-content: center;
    padding-top: 1em;
    padding-left: 47%;
  }

  .content-wrapper {
    width: 86%;
    max-width: 1280px;
    margin: 0 auto;
    position: relative;
    box-sizing: border-box;
  }
  .iphone-image {
    margin-top: 100px;
    margin-left: -1150px;
  }
`;

const featuresIntro = css`
  ul {
    display: grid;
    box-sizing: border-box;
    height: 551px;
    width: 1280px;
    grid-template-columns: 1fr 1fr 1fr;
    list-style-type: none;
    padding-left: 0px;
    padding-top: 130px;
  }
  li {
    background-color: white;
    height: 234px;
    width: 422px;
    margin-bottom: 83px;
    color: grey;
  }

  img {
    height: 70px;
    width: 70px;
  }

  .content-wrapper {
    width: 86%;
    max-width: 1280px;
    margin: 0 auto;
    position: relative;
    box-sizing: border-box;
  }

  .green-square {
    //padding: 120px 20px 20px 30px;

    margin-bottom: 4em;
    box-sizing: border-box;
    border-left: 1px solid #edeef3;
    border-top: 0;
    font-size: 1em;
    padding-left: 50px;
    .text-move {
      padding: 140px -50px 20px 50px;
    }
  }

  .blue-zz {
    //padding: 120px 20px 20px 30px;
    margin-bottom: 4em;
    box-sizing: border-box;
    border-left: 1px solid #edeef3;
    border-top: 0;
    font-size: 1em;
    padding-left: 50px;
    .text-move {
      padding: 140px -50px 20px 50px;
    }
  }

  .pink-squares {
    margin-bottom: 4em;
    box-sizing: border-box;
    border-left: 1px solid #edeef3;
    border-top: 0;
    font-size: 1em;
    padding-left: 50px;
    .text-move {
      padding: 140px -50px 20px 50px;
    }
  }
`;

const majorFeatures = css`
  height: 1316px;
  width: 1614px;
  margin-top: 130px;
  margin-bottom: 130px;
  width: 86%;
  max-width: 1280px;
  margin: 0 auto;
  position: relative;
  box-sizing: border-box;
  text-align: center;

  content-wrapper {
    height: 1316px;
    width: 1614px;
    display: block;
    grid-template-columns: 1fr 1fr 1fr;
  }

  h3 {
    height: 43px;
    width: 1051px;
    padding-left: 110px;
  }

  p {
    max-width: 500px;
    max-height: 87px;
    display: block;
    margin-left: 275px;
    margin-right: 275px;
    margin-left: auto;
    margin-right: auto;
    color: grey;
  }

  .media-well {
    height: 1051;
    width: 674;
    padding-top: 104px;
    padding-bottom: 104px;
    margin-top: 78px;
    background-color: rgb(240, 242, 250);
    background-clip: padding-box;
  }

  img {
    width: 30%;
  }
`;

const taskCreation = css`
  height: 1316px;
  width: 1614px;
  margin-top: 130px;
  margin-bottom: 130px;
  width: 86%;
  max-width: 1280px;
  margin: 0 auto;
  position: relative;
  box-sizing: border-box;
  text-align: center;

  content-wrapper {
    height: 1316px;
    width: 1614px;
    display: block;
  }

  h3 {
    height: 43px;
    width: 1051px;
    text-align: center;
    padding-left: 110px;
  }

  p {
    max-width: 500px;
    max-height: 87px;
    display: block;
    margin-left: 275px;
    margin-right: 275px;
    margin-left: auto;
    margin-right: auto;
    color: grey;
  }

  .media-well {
    height: 1051;
    width: 674;
    padding-top: 104px;
    padding-bottom: 104px;
    margin-top: 78px;
    background-color: rgb(240, 242, 250);
    background-clip: padding-box;
  }

  img {
    width: 30%;
  }
`;

const privacyMajor = css`
  height: 1316px;
  width: 1614px;
  margin-top: 130px;
  margin-bottom: 130px;
  width: 86%;
  max-width: 1280px;
  margin: 0 auto;
  position: relative;
  box-sizing: border-box;
  text-align: center;

  content-wrapper {
    height: 1316px;
    width: 1614px;
    display: flex;
  }

  img.locked-iphone {
    margin: 6em 10px 0 0;
  }

  h3 {
    height: 43px;
    width: 1051px;
    padding-left: 110px;
  }

  p {
    max-width: 500px;
    max-height: 87px;
    display: block;
    margin-left: 275px;
    margin-right: 275px;
    margin-left: auto;
    margin-right: auto;
    color: grey;
  }
`;

const highlightedFeatures = css`
  height: 1316px;
  width: 1614px;
  margin-top: 130px;
  margin-bottom: 130px;
  width: 86%;
  max-width: 1280px;
  margin: 0 auto;
  position: relative;
  box-sizing: border-box;
  text-align: center;

  ul {
    display: grid;
    box-sizing: border-box;
    height: 551px;
    width: 1280px;
    grid-template-columns: 1fr 1fr 1fr;
    //background-color: orange;
    list-style-type: none;
    padding-left: 0px;
    padding-top: 130px;
  }
  li {
    background-color: white;
    height: 234px;
    width: 422px;
    margin-bottom: 83px;
    color: grey;
  }

  h2 {
    height: 52px;
    width: 1221px;
    padding-left: 10px;
    font-weight: normal;
  }

  p {
    max-width: 500px;
    max-height: 87px;
    display: block;
    margin-left: 275px;
    margin-right: 275px;
    margin-left: auto;
    margin-right: auto;
    color: grey;
  }

  .media-well {
    height: 1051;
    width: 674;
    padding-top: 104px;
    padding-bottom: 104px;
    margin-top: 78px;
    background-color: rgb(240, 242, 250);
    background-clip: padding-box;
  }

  img {
    width: 70px;
    height: 70px;
  }
  .ask-Siri {
    //padding: 120px 20px 20px 30px;

    margin-bottom: 4em;
    box-sizing: border-box;
    border-left: 1px solid #edeef3;
    border-top: 0;
    font-size: 1em;
    padding-left: 50px;
    .text-move {
      padding: 140px -50px 20px 50px;
    }
  }
  .green-widget {
    //padding: 120px 20px 20px 30px;

    margin-bottom: 4em;
    box-sizing: border-box;
    border-left: 1px solid #edeef3;
    border-top: 0;
    font-size: 1em;
    padding-left: 50px;
    .text-move {
      padding: 140px -50px 20px 50px;
    }
  }
  .blue-collab {
    //padding: 120px 20px 20px 30px;

    margin-bottom: 4em;
    box-sizing: border-box;
    border-left: 1px solid #edeef3;
    border-top: 0;
    font-size: 1em;
    padding-left: 50px;
    .text-move {
      padding: 140px -50px 20px 50px;
    }
  }
  .blue-accessibility {
    //padding: 120px 20px 20px 30px;

    margin-bottom: 4em;
    box-sizing: border-box;
    border-left: 1px solid #edeef3;
    border-top: 0;
    font-size: 1em;
    padding-left: 50px;
    .text-move {
      padding: 140px -50px 20px 50px;
    }
  }
  .yellow-lock {
    //padding: 120px 20px 20px 30px;

    margin-bottom: 4em;
    box-sizing: border-box;
    border-left: 1px solid #edeef3;
    border-top: 0;
    font-size: 1em;
    padding-left: 50px;
    .text-move {
      padding: 140px -50px 20px 50px;
    }
  }
  .cloud-sync {
    //padding: 120px 20px 20px 30px;

    margin-bottom: 4em;
    box-sizing: border-box;
    border-left: 1px solid #edeef3;
    border-top: 0;
    font-size: 1em;
    padding-left: 50px;
    .text-move {
      padding: 140px -50px 20px 50px;
    }
  }
`;

function App() {
  return (
    <div>
      <header css={headerStyles}>
        <h1>
          <img src={logo} alt="logoPage" />
        </h1>
        <div className="move-it">
          <a href="#1">DOO FOR IOS </a>
          <a href="#1">DOO FOR MAC</a>
          <a href="#1">SUPPORT</a>
          <a href="#1">DOWNLOADS</a>
        </div>
      </header>
      <section css={introStyle}>
        <div className="content-wrapper">
          <div>
            <h1>Simplify your to-do list</h1>
            <img className="apple-logo" src={appleLogo} alt="appleLogo" />
          </div>
        </div>
        <img
          className="iphone-image"
          src={iphoneHero}
          alt="iphone-stack"
          height="605.500"
          width="2418.31"
        />
      </section>
      <section css={featuresIntro}>
        <div className="content-wrapper">
          <ul>
            <li className="green-square">
              <img src={green_square} alt="green-square" />
              <br />
              <br />
              <span className="text-move">
                "Create tasks with a clear,
                <br /> achievable goal."
              </span>
            </li>
            <li className="blue-zz">
              <img src={blue_zz} alt="blue-zz" />
              <br />
              <br />
              <span className="text-move">
                Pick a few tasks each day <br />
                and snooze the rest.
              </span>
            </li>
            <li className="pink-squares">
              <img src={pink_squares} alt="pink-squares" />
              <br />
              <br />
              <span className="text-move">
                Build sustainable habits that feel
                <br />
                invisible.
              </span>
            </li>
          </ul>
        </div>
      </section>
      <section css={majorFeatures}>
        <div className="content-wrapper">
          <h3>Designed with purpose</h3>
          <p>
            Popular productivity apps have tagging, color coding, folders, and
            subfolder. They call it organization. We call it bloat. Doo is
            everything you need and nothing you don’t.
          </p>
        </div>
        <div className="media-well">
          <img src={iphoneFramed} alt="iphone-bigImage" />
        </div>
      </section>
      <section css={taskCreation}>
        <div className="content-wrapper">
          <h3>One-step habit building</h3>
          <p>
            Tap the Edit button to select your tasks for the day and snooze the
            rest. Doo helps you focus and avoid productivity guilt.
          </p>
        </div>
        <div className="media-well">
          <img src={iphoneFrame} alt="iphone-bigImage" />
        </div>
      </section>
      <section css={privacyMajor}>
        <div className="content-wrapper">
          <h3>Keeps your data private</h3>
          <p>
            Privacy is a fundamental right. That’s why Doo includes screen
            locking. No "Pro" upgrade required. We also don’t collect your data.
            What does this mean? No trackers, no cookies, and no analytics.
            Simple — the way it should be.
          </p>
          <img className="locked-iphone" src={iphonePrivacy} alt="lock" />
          <img src={iosPrivacy} alt="applePhone" />
        </div>
      </section>
      <section css={highlightedFeatures}>
        <div className="content-wrapper">
          <h2>Other things you might be wondering about</h2>
          <ul>
            <li className="ask-Siri">
              <img src={askSiri} alt="ask-Siri" />
              <br />
              <br />
              <span className="text-move">
                "Create tasks with a clear,
                <br /> achievable goal."
              </span>
            </li>
            <li className="green-widget">
              <img src={greenWidget} alt="green-widget" />
              <br />
              <br />
              <span className="text-move">
                Pick a few tasks each day <br />
                and snooze the rest.
              </span>
            </li>
            <li className="blue-collab">
              <img src={blueCollab} alt="blue-collab" />
              <br />
              <br />
              <span className="text-move">
                Build sustainable habits that feel
                <br />
                invisible.
              </span>
            </li>
            <li className="blue-accessibility">
              <img src={purpleAccessibility} alt="blue-accessibility" />
              <br />
              <br />
              <span className="text-move">
                Build sustainable habits that feel
                <br />
                invisible.
              </span>
            </li>
            <li className="yellow-lock">
              <img src={yellowLock} alt="yellow-lock" />
              <br />
              <br />
              <span className="text-move">
                Build sustainable habits that feel
                <br />
                invisible.
              </span>
            </li>
            <li className="cloud-sync">
              <img src={yellowCloud} alt="cloud-sync" />
              <br />
              <br />
              <span className="text-move">
                Build sustainable habits that feel
                <br />
                invisible.
              </span>
            </li>
          </ul>
        </div>
      </section>
      <section className="conclusion">
        <div className="content-wrapper" />
      </section>
    </div>
  );
}

export default App;
