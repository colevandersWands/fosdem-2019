# [open source !== open education](https://janke-learning.github.io/fosdem-2019/#/open-education)

In the world of computers and programming, there is open source. In the world of education there are [open education resources](https://opensource.com/resources/what-open-education), resource used for education that are published under an open-source license. This includes software but also things like slides, lesson plans, word problems, videos, etc. Let's take that idea one step further and define **open education** as:

> any educational content or method that can be easily adapted to any educational context by those directly involved (teachers, students, parents, employers, ...), working within their existing means.

This definition of open-eductaion is a stricter standard than is generally placed on open-source software or open educational resources, but it is especially important for computing educators. In the world of programming, every new piece of software and every additional tool adds substantial complexity for students and teachers. In the world of education resources are often short, professional trainings are few, and workloads too high.

On the flip side, teachers & students are the ones who know their contextual challenges better than anyone.

When creating open resources for computing education it is especially important to ballance ease of use & pedagogical strength against prescriptivism & the introduction of new tools. The ideal is to create resources that enable teachers to flexibly update their existing courses while also providing students with the means to extend and adapt coursework to fit their challenges and interests.

### Index

- [open source !== open education](#js-parsons---parsonizer)
- [:white_check_mark: open source, :x: open education](#freecodecamp)
- [:x: open source, :white_check_mark: open education](#repl-it-classroom---multiplayer)
- [:white_check_mark: open source, :white_check_mark: open education](#python-tutor)
- [student-accessible OER](#student-accessible-oer)

---

## [js-parsons](http://js-parsons.github.io/) & [parsonizer](https://janke-learning.github.io/parsonizer/)

[Parsons problems](https://interactivepython.org/runestone/static/sigcse2017/Directives/mixedUp.html) are a simple exercise that are very effective for helping beginner programmers learn the structures and logic of code without being overwhelmed by syntax, errors, and bugs. Students are presented with the lines of a small script shuffled around, their task is to click and drag them into the right order.

**Js-parsons** is an open source tool developed so teachers can embed parsons problems into their courses, [like so](https://runestone.academy/runestone/static/StudentCSP/CSPRepeatNumbers/list.html). This is an outstanding open source educational resource, but it falls slightly short of being a full open-education tool because it is beyond most students' ability to build or adapt their own parsons problems. While this tool is simple enough to use, it is still complex enough that it would be beyond the time and expertise for an average teacher to fully incorporate it into their existing course.

**Parsonizer** is an open-education tool built around js-parsons that automatically generates a parsons problem for any given snippet of code. The barriers to any student or teacher incorporating this tool into their existing course, or building a new course around it, are essentially none. All that is required of a teacher is to build a good collection of themed snippets, and all that's required of a student is to collect the snippets of code that have taught them the most. This is both open source and open education.

[TOP](#)

---

## [FreeCodeCamp](https://www.freecodecamp.org/)

FreeCodeCamp is easily one of the largest and most successful online resources for learning javascript. They have over 1200 hours of exercises and projects, hundreds of blog posts & videos, a very supportive online community, and in-person study groups all around the world. Additionally, they keep all the code and exercises for their online school open-source on github. It's no exageration to say that this is one of the single greatest free resources online for anyone wishing to learn how to program in JavaScript.

Despite the strength and openness of it's human followers, the online FreeCodeCamp programming environmnet is not open education. The content provided is fairly prescriptive, and the technical barriers of entry for contributing or forking and adapting the course are non-trivial. Additionally, their online coding environmnt does very little to prepare students for coding outside of it's protective confines, and does not enable students to explore concepts not directly covered.

:white_check_mark: open source, :x: open education

[TOP](#)

---

## repl.it [classroom](https://repl.it/site/blog/classroomoverview) & [multiplayer](https://repl.it/site/blog/multi)

Repl.it is a no-install online runtime environment that supports a huge list of programming languages, development frameworks and testing tools. They also have free utilites for teachers to create, assign, track & automatically or manually grade programming assignemnts. Repl.it recently added a multiplayer feature the enables anyone to live-code in the same virtual machine with integrated chats. While rebuilding a whole course to host on Repl.it would take considerable time and energy, putting up the occasional homework assignment and hosting new examples Repl.it is an easy way to upgrade.

The lengths that replit has gone to create low-effort high-impact tools for students and teachers alike makes it a top-rate tool for open education, even if they still aren't open source.

:x: open source, :white_check_mark: open education

[TOP](#)

---

## [python tutor](http://www.pythontutor.com/)

Python Tutor is the most indispensable resource on this list for any computing educator or coding student. Being able to accurately predict how JavaScript executes code behind the scenes is one of the most valuable skills students can develop, and the sooner the better. Python Tutor was designed specifically to visualize how different programming languages manage memory and step through their source code.

Not only can you make permalinks to save your progress, work real-time on the same code, and chat live with others, but it has a simple integrated development environment that lets you copy in any snippet and privides helpful feedback about syntax and runtime errors. This is a prime example of a project that is both open source and an invaluable tool for open computing education.

:white_check_mark: open source, :white_check_mark: open education

[TOP](#)

---

## Student-Accessible OER

The final tier of open-source education resources is **student-accessible open educational resources**. These are any learning materials that are not only open-source, but developed at a level that a student could realistically understand & modify. Having all pieces of a course be student-accessible is not realistic (look at the value added by Python Tutor), but striving to have as much as possible will go a long way to empowering teachers & students.

- Materials for [HackYourFuture Belgium](https://github.com/HackYourFutureBelgium/) are written with this standard in mind. A good example is the [Welcome to JS module](https://github.com/HackYourFutureBelgium/welcome-to-js/) and the [Study Lenses learning environment](https://github.com/colevandersWands/study-lenses/). Study Lenses is not student-accessible, but materials written for it are. Welcome to JS includes parsons problems, fill-in-the-blanks, worked examples, code tracing, memory visualization, dynamically generated comprehension questions, and much more. Meanwhile all the materials are student-accessible (JavaScript, Markdown, JSON) with no special syntax required.
- Arithmetic Coercion: [live coercion table](https://colevandersWands.github.io/arithmetic-coercion/), [source code](https://github.com/colevandersWands/arithmetic-coercion/tree/master/tabling)

[TOP](#)

---

---

### <a href="http://janke-learning.org" target="_blank"><img src="https://user-images.githubusercontent.com/18554853/50098409-22575780-021c-11e9-99e1-962787adaded.png" width="40" height="40"></img> Janke Learning</a>
