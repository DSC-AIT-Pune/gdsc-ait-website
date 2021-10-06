<h1  align="center">Welcome to Google Developer Students Club, AIT 👋</h1>

<p align="center">
    <a href="https://hacktoberfest.digitalocean.com/">
        <img src="https://raw.githubusercontent.com/DSC-AIT-Pune/gdsc-ait-website/hacktoberfest/client/src/images/logo-hacktoberfest-full.f42e3b1.svg" width="50%">
    </a>
</p>

<h2 align="center">🎉 Hacktoberfest 2021 🎉</h2>

<br>

<div align="center">
  
<img src="https://img.shields.io/badge/hacktoberfest-2021-blueviolet" alt="Hacktober Badge"/>
 <img src="https://img.shields.io/static/v1?label=%F0%9F%8C%9F&message=If%20Useful&style=style=flat&color=BC4E99" alt="Star Badge"/>
 <a href="https://github.com/DSC-AIT-Pune" ><img src="https://img.shields.io/badge/Contributions-welcome-violet.svg?style=flat&logo=git" alt="Contributions" /></a>

<a href="https://github.com/DSC-AIT-Pune/gdsc-ait-website/pulls"><img src="https://img.shields.io/github/issues-pr/DSC-AIT-Pune/gdsc-ait-website" alt="Pull Requests Badge"/></a>
<a href="https://github.com/DSC-AIT-Pune/gdsc-ait-website/graphs/contributors"><img alt="GitHub contributors" src="https://img.shields.io/github/contributors/DSC-AIT-Pune/gdsc-ait-website?color=2b9348"></a>
<a href="https://github.com/DSC-AIT-Pune/gdsc-ait-website/blob/master/LICENSE"><img src="https://img.shields.io/github/license/DSC-AIT-Pune/gdsc-ait-website?color=2b9348" alt="License Badge"/></a>


</div>

#### 🗣 Hacktoberfest encourages participation in the open source community, which grows bigger every year. Complete the 2021 challenge and earn a limited edition T-shirt.

📢 **Register [here](https://hacktoberfest.digitalocean.com) for Hacktoberfest and make four pull requests (PRs) between October 1st-31st to grab free SWAGS 🔥.**


Steps for creating your first pull request (PR)
```
< Easy approach through browser />

    1. Fork this repository
    2. Goto branch named "hacktoberfest"
    3. Navigate to "Contributors.js" in /client/src/pages/Contributors.js
    4. Click "Edit" and add your entry
    5. Add your name
    6. Add a description (optional)
    7. Copy your github profile's image address and add in imgUrl 
    8. Scroll down & commit your changes with a message
    9. Goto "<>Code" tab & click Contribute
    10. Open PR & create PR with a message 
```
<h3 align="center">🤝 Congratulations on your first PR  🤝</h3>

```
< Better approach through Git />

Prerequisites: None 😃 everything will be mentioned step-wise below.
```
0. **Sign into [GitHub](https://github.com/login) | Create a free** [GitHub account](https://github.com/join)
1. **Install Git**<br>
    a. Debian > ```sudo dnf install git-all```<br>
    b. Ubuntu > ```sudo apt install git-all```<br>
    c. Mac > ```git --version```<br>
    d. Windows > [Download](https://git-scm.com/download/win)
2. **Fork and Star the project repository**<br>
 Find the project's repository on GitHub, and then "fork" it by clicking the **Fork** button in the upper right corner:<br>
 ![Fork&Star](https://user-images.githubusercontent.com/32845547/136189959-0f5dc32a-880b-449e-91d1-98d1c0e8eaa5.png)<br>
 This creates a copy of the project repository in your GitHub account. In the upper left corner, you will see that you are now looking at a repository in your account:<br>
 ![repo name](https://user-images.githubusercontent.com/32845547/136190206-6d0ce43a-03e3-4d00-a62c-7ae2c36a3f41.png)


3. **Clone your fork**<br>
While still in your repository, click the green Clone or download button and then copy the HTTPS URL:<br>
![clone](https://user-images.githubusercontent.com/32845547/136190725-60ba3cff-f6ca-4eb6-bb32-9abb7f1754ad.png)<br>
Using Git on your local machine, clone your fork using the URL you just copied: ```git clone URL_OF_FORK```

 For example, I used ```git clone https://github.com/Illusion0-0/gdsc-ait-website.git```<br>
 ![git clone](https://user-images.githubusercontent.com/32845547/136191080-2b27e3b8-6d35-4885-a717-b3692eeedfa7.png)<br>
 Cloning copies the repository files (and commit history) from GitHub to your local machine. The repository will be downloaded into a subdirectory of your working directory, and the subdirectory will have the same name as the repository.
 
4. **Navigate to your local repository**<br>
Since the clone was downloaded into a subdirectory of your working directory, you can navigate to it using: cd NAME_OF_REPOSITORY.<br>

 For example, I used ```cd gdsc-ait-website```<br>

5. **Add the project repository as the "upstream" remote**<br>
Go to your fork on GitHub, and click the "forked from" link to return to the project repository:<br>
While in the project repository, click the green Code button and then copy the HTTPS URL: <br>
Add the project repository as the "upstream" remote using: git remote add upstream URL_OF_PROJECT.

 For example, I used git remote add upstream ```https://github.com/DSC-AIT-Pune/gdsc-ait-website.git```<br>
 Use git remote -v to check that you now have two remotes: an origin that points to your fork, and an upstream that points to the project repository.
 <br>![upstream set](https://user-images.githubusercontent.com/32845547/136192280-63c4cf97-17a7-464a-b338-d36009e7567f.png)<br>
 
6. **Switch Branch to Hacktoberfest**<br>
 Use ```git checkout hacktoberfest``` & then ```git branch``` to check current branch<br> Navigate to *Contributors.js* as ```cd client/src/pages```<br>![contributor](https://user-images.githubusercontent.com/32845547/136192998-fb93996d-1cd3-4bde-9aaf-5ad89dc18bc6.png)<br>
 
7. **Make changes in your local repository**<br>
![add](https://user-images.githubusercontent.com/32845547/136193737-24c2d746-79d0-454a-bfcc-99a76f89c7fe.png)<br>
Add your entry as done by other contributors & save your changes<br>

8. **Commit your changes**<br>
After you make a set of changes, use ```git add -A``` to stage your changes and ```git commit -m "DESCRIPTION OF CHANGES"``` to commit them.

 For example, I used ```git commit -m "Added Tarun"``` for one of my commits.

 If you are making multiple sets of changes, it's a good practice to make a commit after each set.<br>![add commit](https://user-images.githubusercontent.com/32845547/136195534-6aacf215-773d-4b01-b188-aeeaeffc926d.png)<br>
 
9. **Push your changes to your fork**
<br>```git push```<br>![pushed](https://user-images.githubusercontent.com/32845547/136196006-ad32385b-f45b-4ea1-bb0f-2fc409169bcf.png)<br>

10. **Begin the pull request**<br>
Return to your fork on GitHub, and refresh the page. You may see a highlighted area that displays your recently pushed branch:<br>![pr](https://user-images.githubusercontent.com/32845547/136196135-66f9a1ad-ebec-4a58-a6b8-bc5cdeb3c1f2.png)<br>
Click the green Compare & pull request button to begin the pull request.

11. **Create the pull request**<br>
When opening a "pull request", you are making a "request" that the project repository "pull" changes from your fork. You will see that the project repository is listed as the "base repository", and your fork is listed as the "head repository":<br>![check branch](https://user-images.githubusercontent.com/32845547/136196323-7d5e34a7-e227-47d5-b326-590204b26185.png)<br>
Make sure the *base* & *compare* are set to "Hacktoberfest".

 Before submitting the pull request, you first need to describe the changes you made (rather than asking the project maintainers to figure them out on their own). You should write a descriptive title for your pull request, and then include more details in the body of the pull request. If there are any related GitHub issues, make sure to mention those by number. The body can include Markdown formatting, and you can click the Preview tab to see how it will look.<br>![pr msg](https://user-images.githubusercontent.com/32845547/136196602-0657f013-7ba7-43e5-b9ec-99d99d6a2561.png)
<br>On the right side, you may see a link to the project's Contributing guidelines. This is primarily worth reading through if you are submitting substantial code (rather than just fixing a typo), but it may still be worth scanning through at this point.

 Below the pull request form, you will see a list of the commits you made in your branch, as well as the "diffs" for all of the files you changed.

 If everything looks good, click the green **Create pull request** button!
 <br>![done](https://user-images.githubusercontent.com/32845547/136196798-e334d78f-6c98-4fd9-8532-e2ea91b67551.png)
<br>If the project maintainers accept your pull request (congratulations!), they will merge your proposed changes into the project's master branch and close your pull request:<br>![merged](https://user-images.githubusercontent.com/32845547/136197019-f0009758-8596-4e88-8517-0aa3400c8079.png)

<h3 align="center">🤝 Congratulations on your first PR  🤝</h3>

## Github Contribution Rules
- Pull requests can be submitted to any opted-in repository on GitHub or GitLab.
- The pull request must contain commits you made yourself.
- If a maintainer reports your pull request as spam, it will not be counted toward your participation in Hacktoberfest.
- If a maintainer reports behavior that’s not in line with the project’s code of conduct, you will be ineligible to participate.
- To get a shirt, you must make four approved pull requests (PRs) on opted-in projects between October 1-31 in any time zone.
- This year, the first 50,000 participants can earn a T-shirt.
---

## Author

👤 **GDSC AIT**

* Twitter: [@dsc_ait](https://twitter.com/dsc_ait)
* Github: [@DSC-AIT-Pune](https://github.com/DSC-AIT-Pune)
* Facebook: [@dsc.aitpune](https://www.facebook.com/dsc.aitpune/)
* LinkedIn: [@dsc-ait](https://www.linkedin.com/company/dsc-ait/)
* Discord: [@Google Developer Student Club, AIT Pune](https://discord.gg/sCbmmS4j)

## Acknowledgement

* Made with ❤️ by Google Developers Students Club, AIT 

## Show your support



```javascript
if (isAwesome) {
    // thanks in advance :p
    starThisRepository();
    //⭐️
}
```
-----------

[![GitHub followers](https://img.shields.io/github/followers/DSC-AIT-Pune.svg?label=Follow%20@DSC-AIT-Pune&style=social)](https://github.com/DSC-AIT-Pune/) [![Twitter Follow](https://img.shields.io/twitter/follow/dsc_ait.svg?style=social)](https://twitter.com/dsc_ait)
