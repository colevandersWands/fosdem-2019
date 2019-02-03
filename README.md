# JS for open computing education


the next standard in open computing education will be built around javascript.  it may not be the ideal beginner language, but a broader look at the requirements for such an open course will show that not only is javascript the only real option, but that it is actually a very good one. With some effort and imagination JS's extreme flexibility, accessible developer tools & integrated ui functionality (DOM) can be put to use making JS an outstanding choice for an entry level course in computational literacy.

What exactly is computational/digital literacy? it's difficult to satisfactorily dine, though there are some [pretty good attempts](https://computinged.wordpress.com/2012/04/06/a-nice-definition-of-computational-thinking-including-risks-and-cyber-security/) out there. What's easier is to demonstrate the type of project that could be expected at the end of such a course:
* [final project](https://github.com/janke-learning/statefull-project-demo)
  
Without being beyond the reach of a first-year student, this project demonstrates basic mastery of:
* a programming language
* testing & documentation
* structured development
* abstraction
* embedding problems for applied computing
* recursion
* basic data modeling 
* applications as core data with user interactions
* open source software 
* professional development tools
* user interaction & experience

> For an idea of how to implement this course, [check out the slideshow in this repo](http://janke-learning.github.io/fosdem-2019).


To be successful, a fully open course in computational literacy should have embedded into it's very essence ...

* [honesty](#honesty)
* [agency](#agency)
* [ownership](#ownership)
* [integration](#integration)
* [preparation](#preparation)

___

## [honesty](https://en.wikiversity.org/wiki/Intellectual_Honesty)
  

The next generation of programmers should grow up understanding that while programming is hard it can be understood at face value, and they can understand it. 

[Prof. dr. Edsger W. Dijkstra](https://www.cs.utexas.edu/users/EWD/transcriptions/EWD10xx/EWD1036.html) says that the only true way to teach computer science is by writing proofs by hand, on paper, approaching cs first as a purely mathematical skill. Only then, he claims, can students truly understand the "radical novelty" of computation. He's onto something, analogies or high-level understanding are appealing and rewarding but ineffective for true learning.

The programming equivalent of dikjstra's method for teaching cs is to create exercises whose primary learning objective is the [notional machine](https://www.researchgate.net/profile/Juha_Sorva/publication/259998496_Notional_Machines_and_Introductory_Programming_Education/links/5586b8f008aef58c039f90f5/Notional-Machines-and-Introductory-Programming-Education.pdf), emphasizing the [_structure_ of programming languages](https://computinged.wordpress.com/2012/05/24/defining-what-does-it-mean-to-understand-computing/) & scripts over the role they play or what ends they achieve.  To keep things intellectually honest these exercises should include "meaningless" snippets of code with no attempt to connect them to anything outside of their own execution.  Taking this notion one step further leads to the idea that not only should the focus of the exercise be simply how the code is executed, but that the 'learning environment' should simply be the runtime environment, and any feedback to students comes directly from the machine, gathered by the machine throughout it's own execution with no intermediary software or interfaces. If successful, such an approach would play the double role of teaching students a practical notional machine __and__ equipping them with the skills necessary to embed such feedback and monitoring into any code they encounter. 


__The interpreter as learning objective & learning environment__

* Explicitly teach a notional machine
    * [value swap](https://github.com/janke-learning/value-swap)
    * [reference vs value](https://github.com/janke-learning/reference-vs-value)
    * [dots vs. brackets](https://github.com/janke-learning/dots-vs-brackets)
    * [arithmetic coercion](https://github.com/janke-learning/arithmetic-coercion)
    * [expanding](https://github.com/janke-learning/expanding)
* Execution environment _is_ learning environment
    * [trace & log](https://github.com/janke-learning/trace-and-log)
    * [execution paths](https://github.com/janke-learning/execution-paths)
    * [trace & assert](https://github.com/janke-learning/trace-and-assert/)
* Fully embedded learning resource
    * [boolean by example](https://github.com/janke-learning/boolean-by-example)
    * [recursive calls](https://janke-learning.github.io/recursive-calls)
    * ['this' and events](https://janke-learning.github.io/fosdem-2019/4-full-complexity-max-simplicity/index.html)

[TOP](#js-for-open-computing-education)

---

## [agency](https://pllc.fi.ncsu.edu/2018/02/22/learner-agency-pushing-the-boundaries-of-educational-possibilities-in-the-digital-age/)

The resources students use to learn should themselves be [realistically open-source](https://github.com/janke-learning/fosdem-2019/blob/master/5-open-source-open-education.md) for students, embedding digital agency into the core of their learning experience.

__student-accessible open education__
* simply-hosted learning materials
    * [errors](https://github.com/janke-learning/errors)
    * [test cases](https://github.com/janke-learning/test-cases)
* be composed of tools for fully open education
    * [python tutor](http://www.pythontutor.com/)
    * [js-parsons starter](https://github.com/janke-learning/js-parsons-starter)
    * [parsonizer](https://github.com/janke-learning/parsonizer)
* accessibly open-source learning resources
    * [arithmetic coercion](https://github.com/janke-learning/arithmetic-coercion)
    * [boolean by example](https://github.com/janke-learning/boolean-by-example)
    * [parsons control flow](https://github.com/janke-learning/parsons-control-flow)

[TOP](#js-for-open-computing-education)

---

## [ownership](https://www.naldic.org.uk/Resources/NALDIC/Initial%20Teacher%20Education/Documents/SocialandCulturalContext.pdf)
  

Students, teachers, communities and families should feel that their education is theirs.  That it covers what is needed for them to thrive in their own context, and is delivered in a mode that complements their lives. For this to be possible, educators should be able to adapt this course to fit their needs with no more technical knowledge than is necessary to teach the course.

__readily adapted__
* modular and easily adjusted course syllabi
    * [top](https://github.com/janke-learning/top)
* zero-dependancy, non-prescriptive open learning environments
    * [python tutor](http://www.pythontutor.com/)
    * [repl.it](https://repl.it/)
    * [dev console](https://developer.mozilla.org/nl/docs/Tools)
    * [github](https://github.com/) or [gitlab](https://about.gitlab.com/)
    * [ast explorer](https://astexplorer.net/#/gist/e22d33e10f7c29268d5074803e35ced5/dc62a6c670ad23a226b4a7ae1ac017c28199b58e)
* highly granular repository-based content
  

[TOP](#js-for-open-computing-education)

---

## [integration](http://electronicbookreview.com/essay/critical-code-studies/)

projects should instill a surround-sound understanding of the role code plays at the center of digital rhetorical spaces, implementing theoretical concepts to bring to life new spaces where users, developers and the world at large come together with walls.
* integration: understand the central role of the developer and code at the center of the modern digital rhetorical space, creating and influencing the very world we live in and how it is experienced. learn their place in this rhetorical space
* integrative: emphasize the interfaces between humans (devs & users), running programs, and machines
  * encourage creative and extra-curricular programming
      js has html, css & the internet
      https://github.com/janke-learning/if-hemingway
  * address the pillars of an integrative computational literacy
      * computer science
      * using code
      * structured development
      * communicative coding
      * user & world focused development
  * emphasize applied computing
      embedding in demo project
  * development process & validation testing & documentation
      https://github.com/janke-learning/test-cases
      https://github.com/janke-learning/stateless-demo-project
      https://github.com/janke-learning/statefull-project-demo
      student can see and manipulate all facets of an application in one window


[TOP](#js-for-open-computing-education)

---

## [preparation](https://www.hv.se/globalassets/dokument/stodja/paper-theme-2-5.pdf)

students completing an introductory course in computational literacy should be prepared to continue their studies down any of the relevant paths, and be prepared with skills that won't go out of fasion and will allow them to adapt to changing world
  * introduce core theoretical concepts with applied exercises
      boolean algebra & simplifying expressions
      https://github.com/janke-learning/recursion
      https://github.com/janke-learning/simplifying-boolean-expressions
      https://github.com/janke-learning/boolean-algebra
  * deep understanding of language & program design
      https://github.com/janke-learning/janke-the-framework
      https://github.com/janke-learning/comparadigms
  * future-proofed learning & skills
    * javascript ain't goin anywhere
    * core programming skills & thinking won't go anywhere

The most important skills in the coming century cannot be taught explicitly in a traditional calssroom setting.  So called « 21st Century Skills » are elusive to traditional teaching methods, but can be effectvely taught & learned with well-matched instructional design methodologies.  All such instructional designs will have a shared core, and a contextually dependant implementation.  

The shared core of any 21st Century instructional design is a sensitivity to the fundamental mechanisms of human learning, and the acquisition of higher-order cognitive and executive functions (aka 21st century skills) through the guided pracitce of technical skills in pedagogically designed scenarios.  Once mastered in one domain, 21st Century Skills can transfer accross domains as indiviuals face shifting and uncertain futures.

Any contextually sensitive implementation needs to satsify 3 criteria, which can only be met with empathy for the affected community and an understanding of the actual professional context:

Community Ownership: Education is intimate. In the big picture, it plays a large role in determining what a society will be in 10 years.  On a daily basis, students, teachers & staff must want to be there. Educational institutions should be run by and for the community it serves. An educational institution will not succeed if the community it serves cannot feel that it is irrelevant, out of their control, or cannot be trusted.  

Contextual Relevency: The offerings, structure, and deployment of an educational offering must match the daily needs of it's host. what skills are needed for an individual to thrive in, and grow their community? what resources (time, money, concentration, scheduling) are individuals capapble of investing in their education?

Expert Domain Knowledge:  21st Century Skills are best learned on the back of practical experience.  To maximize the transfer of practical skills to the professional setting and to provide a solid base for learning 21st Century Skills, 21st Century Trainings must be built around the insights & experiences of active professionals in the target field.


[TOP](#js-for-open-computing-education)

___
___
### <a href="http://janke-learning.org" target="_blank"><img src="https://user-images.githubusercontent.com/18554853/50098409-22575780-021c-11e9-99e1-962787adaded.png" width="40" height="40"></img> Janke Learning</a>

