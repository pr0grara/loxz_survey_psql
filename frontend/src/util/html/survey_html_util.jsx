// import React from "react";
// import ReactDOM from "react-dom";
// import axios from "axios";
// import alert from "alert";

// export const routeKeyPress = (e) => {
//   if (!e) return;
//   switch (e.key) {
//     case "ArrowUp":
//       if (this.activeQuestionIdx - 1 == 0) return;
//       this.revealPrevious();
//       break;
//     case "ArrowDown":
//       this.revealNext();
//       break;
//     // case "Enter":
//     //   if (this.activeQuestion.ariaLabel == "open")
//     //   this.revealNext();
//   }
// }

// export const getAbsoluteHeight = (el) => {
//   // Get the DOM Node if you pass in a string
//   el = typeof el === "string" ? document.querySelector(el) : el;

//   var styles = window.getComputedStyle(el);
//   var margin =
//     parseFloat(styles["marginTop"]) + parseFloat(styles["marginBottom"]);

//   return Math.ceil(el.offsetHeight + margin);
// }

// export const adjustBannerSize = () => {
//   let questionHeight = this.getAbsoluteHeight(this.activeQuestion);
//   let navbarHeight = this.getAbsoluteHeight(
//     document.querySelector("#navbar")
//   );
//   let surveyHeight = this.getAbsoluteHeight(
//     document.querySelector("#survey")
//   );
//   let adjust = navbarHeight + surveyHeight;
//   document.querySelector("#banner").style.height = `${
//     window.innerHeight - adjust
//   }px`;
//   console.log(adjust);
// }

// export const componentDidMount = () => {
//   this.activeQuestion = document.querySelectorAll(".survey-question")[0];
//   let type = this.activeQuestion.ariaLabel;
//   if (type == "multi" || type == "open")
//     document.querySelector("#next").className = "";
//   this.adjustBannerSize();
//   window.addEventListener("keydown", (e) => this.routeKeyPress(e));
// }

// export const check = (question) => {
//   let answer = question.querySelectorAll(".answer");
//   switch (question.ariaLabel) {
//     case "binary":
//       return answer[0].checked || answer[1].checked ? false : true;
//     case "open":
//       return answer[0].value !== "" ? false : true;
//     case "multi":
//       return Array.from(answer).some((ans) => ans.checked) ? false : true;
//     case "single":
//       return Array.from(answer).some((ans) => ans.checked) ? false : true;
//   }
// }

// export const loading = async () => {
//   let percentDone = Math.ceil(
//     (this.answeredCount / this.questionCount) * 100
//   );
//   let loading = document.querySelector("#loading-bar");
//   let text = document.querySelector("#loading-text");
//   loading.style.width = `${percentDone}%`;
//   // loading.classList.toggle("animate");
//   // setTimeout(() => {
//   //   document.querySelector("#loading-bar").classList.toggle("animate")
//   // }, 400);
//   text.innerText = `${
//     this.answeredCount + "/" + this.questionCount + "     " + percentDone
//   }%`;
//   window.scrollTo(0, 100000);
// }

// export const revealPrevious = (e) => {
//   let previous = document.querySelectorAll(".survey-question")[
//     this.activeQuestionIdx - 1
//   ];
//   if (!previous) return;
//   this.activeQuestionIdx = this.activeQuestionIdx - 1;
//   previous.classList.toggle("answered");
//   document
//     .querySelectorAll(".survey-question")
//     [this.activeQuestionIdx].classList.toggle("answered");
// }

// export const revealNext = () => {
//   let previous = document.querySelectorAll(".survey-question")[
//     this.activeQuestionIdx
//   ];
//   if (!previous) return;
//   if (this.check(previous)) {
//     alert("please answer");
//     return;
//   }

//   if (this.activeQuestionIdx + 2 == this.questionCount) {
//     // document.querySelector("#submit").classList.toggle("hidden");
//     // document.querySelector("#next").classList.toggle("hidden");
//   }

//   this.activeQuestionIdx = this.activeQuestionIdx + 1;
//   previous.classList.toggle("answered");

//   if (this.activeQuestionIdx !== this.questionCount) {
//     this.activeQuestion = document.querySelectorAll(".survey-question")[
//       this.activeQuestionIdx
//     ];
//     this.activeQuestion.classList.toggle("unanswered");
//   }

//   // let next = document.querySelector("#next");
//   // let type = this.activeQuestion.ariaLabel;
//   // if (type == "single" || type == "binary") {
//   //   next.className = "hidden";
//   // } else {
//   //   next.className = "";
//   // }

//   this.answeredCount = this.answeredCount + 1;
//   this.loading();
// }

// export const nextButton = () => {
//   // document.querySelector("#next").classList.toggle("hidden");
// }

// export const analyzeThis = async (answer) => {
//   this.analyzed.push(
//     await axios
//       .post("/api/answers/analyze", answer) // hits routes/api/answers.js backend
//       .then((analyzed) => {
//         console.log(analyzed);
//         return analyzed.data.keyPhrases[0].keyPhrases;
//       })
//       .catch((err) => console.log(err))
//   );
// }

// export const iterator = async (forAnalysis) => {
//   for (let i = 0; i < forAnalysis.length; i++)
//     await this.analyzeThis(forAnalysis[i]);
// }

// export const analyzer = async (unfilteredAnswers) => {
//   var filtered = unfilteredAnswers.filter(
//     (answer) => Object.keys(answer)[0] == "open"
//   );
//   filtered = filtered.map((obj) => obj["open"]);
//   filtered = filtered.map((answer) => ({ text: answer[0].value }));
//   await this.iterator(filtered);
// }

// export const otherSelect = (e) => {
//   if (e.key !== "Enter") return;
//   let target = e.target.parentElement;
//   target.checked = !target.checked;
//   target.classList.toggle("selected");
//   if (e.target.parentElement.classList.value.match(/single/gi))
//     this.revealNext();
// }

// export const makeOther = (target) => {
//   let other = document.createElement("input");
//   other.classList.add("other-input");
//   other.addEventListener("keydown", (e) => {
//     this.otherSelect(e);
//   });
//   return other;
// }

// export const selectBinary = (e) => {
//   e.preventDefault();
//   let parentElement = e.target.parentElement;
//   let children = parentElement.children;
//   let [child1, child2] = [children[0], children[1]];
//   if (e.target == child1) {
//     child1.checked = child1.checked ? false : true;
//     child1.classList.toggle("selected");
//     if (child2.checked) {
//       child2.checked = false;
//       child2.classList.toggle("selected");
//     }
//   } else {
//     child2.checked = child2.checked ? false : true;
//     child2.classList.toggle("selected");
//     if (child1.checked) {
//       child1.checked = false;
//       child1.classList.toggle("selected");
//     }
//   }
//   if (e.target.parentElement.parentElement == this.activeQuestion) {
//     this.revealNext();
//   }
// }

// export const selectMulti = (e) => {
//   e.preventDefault();
//   // document.querySelector("#next").classList.remove("hidden");
//   if (e.target.classList == "other-input") return;
//   if (e.target.innerText.match(/other/gi)) {
//     e.target.appendChild(this.makeOther(e.target));
//     return;
//   }
//   e.currentTarget.checked = !e.target.checked;
//   e.currentTarget.classList.toggle("selected");
// }

// export const selectSingle = (e) => {
//   e.preventDefault();
//   // document.querySelector("#next").classList.add("hidden");
//   if (
//     e.currentTarget.innerText.match(/other/gi) &&
//     !e.target.querySelector("input")
//   ) {
//     e.target.appendChild(this.makeOther());
//     return;
//   }

//   if (e.currentTarget.innerText.match(/other/gi && !e.currentTarget.checked))
//     return;

//   let parent = e.currentTarget.parentElement;
//   let children = parent.children;

//   if (e.target.checked) return;

//   for (let i = 0; i < children.length; i++) {
//     if (children[i].checked) children[i].classList.toggle("selected");
//     children[i].checked = false;
//   }
//   e.currentTarget.checked = true;
//   e.currentTarget.classList.toggle("selected");
//   if (e.target.parentElement.parentElement == this.activeQuestion) {
//     this.revealNext();
//   }
// }

// export const classNamer = (i) => {
//   return i == 0 ? "survey-question" : "survey-question unanswered";
// }

// export const binaryFactory = (question, i) => {
//   return (
//     <div
//       className={this.classNamer(i)}
//       aria-label="binary"
//       key={question._id}
//     >
//       <label className="question-content">{question.content}</label>
//       <div className="binary-answers">
//         <div
//           className="answer binary"
//           onClick={this.selectBinary}
//           checked={false}
//         >
//           Yes
//         </div>
//         <div
//           className="answer binary"
//           onClick={this.selectBinary}
//           checked={false}
//         >
//           No
//         </div>
//       </div>
//     </div>
//   );
// }

// export const openFactory = (question, i) => {
//   return (
//     <div className={this.classNamer(i)} aria-label="open" key={question._id}>
//       <label className="question-content">{question.content}</label>
//       <div className="open-answer">
//         <input className="answer open" />
//       </div>
//     </div>
//   );
// }

// export const multiFactory = (question, i) => {
//   return (
//     <div className={this.classNamer(i)} aria-label="multi" key={question._id}>
//       <label className="question-content">
//         {question.content}
//         <div style={{ fontSize: "small", marginTop: "10px" }}>
//           (select all that apply)
//         </div>
//       </label>
//       <div className="multi-answers">
//         {question.answers.map((answer, idx) => (
//           <div
//             className="answer multi"
//             onClick={this.selectMulti}
//             key={question._id + idx}
//             checked={false}
//           >
//             {answer}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export const singleFactory = (question, i) => {
//   return (
//     <div
//       className={this.classNamer(i)}
//       aria-label="single"
//       key={question._id}
//     >
//       <label className="question-content">{question.content}</label>
//       <div className="single-answers">
//         {question.answers.map((answer, idx) => (
//           <div
//             className="answer single"
//             onClick={this.selectSingle}
//             key={question._id + idx}
//             checked={false}
//           >
//             {answer}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export const extractAnswers = (answer) => {
//   let key = Object.keys(answer)[0];
//   let values = Object.values(answer)[0];
//   switch (key) {
//     case "binary":
//       return values[0].checked ? values[0].innerText : values[1].innerText;
//     case "open":
//       return values[0].value;
//     case "multi":
//       let multi = values
//         .filter((ans) => ans.checked)
//         .map((ans) => {
//           if (ans.innerText.match(/other/gi)) {
//             return ans.querySelector("input").value;
//           }
//           return ans.innerText;
//         });
//       return multi.join(", ");
//     case "single":
//       let single = values.filter((ans) => ans.checked)[0];
//       if (single.innerText.match(/other/gi)) {
//         return single.querySelector("input").value;
//       } else {
//         return single.innerText;
//       }
//   }
// }

// export const handleSubmit = async e => {
//   e.preventDefault();

//   // var surveyNo = (await axios.get("/api/results/count")).data.length; // hits routes/api/results.js backend
//   var surveyNo = (await this.props.resultCount()).data + 1; // hits results backend, collects last results number and adds one for the new result
//   console.log(surveyNo);

//   const newResult = {
//     number: surveyNo,
//     user: "Ara",
//     answers: [],
//   };

//   var questions = Array.from(document.querySelectorAll(".survey-question"));

//   var answers = [];
//   questions.forEach((question) => {
//     // console.log(question)
//     let obj = {};
//     let key = question.ariaLabel;
//     obj[key] = Array.from(question.querySelectorAll(".answer"));
//     // obj[key] = question.querySelectorAll(".answer")
//     answers.push(obj);
//   });
//   // console.log(answers)
//   if (
//     answers.some((answer) => {
//       // console.log(answer)
//       let key = Object.keys(answer)[0];
//       let values = Object.values(answer)[0];
//       switch (key) {
//         case "binary":
//           return values[0].checked || values[1].checked ? false : true;
//         case "open":
//           return values[0].value !== "" ? false : true;
//         case "multi":
//           return values.some((ans) => ans.checked) ? false : true;
//         case "single":
//           return values.some((ans) => ans.checked) ? false : true;
//       }
//     })
//   ) {
//     console.log("survey not complete");
//     alert("please fill 'em all out 😉");
//     return;
//   }

//   var loading = document.createElement("a");
//   loading.id = "loading";
//   loading.href = "https://www.lowgif.com/f923243801ca43a0.html";
//   loading.target = "_blank";
//   var img = document.createElement("img");
//   img.src =
//     "https://cdn.lowgif.com/full/f923243801ca43a0-15-latest-and-best-loading-animations-to-make-user-enjoy-waiting.gif";
//   loading.appendChild(img);
//   document.querySelector("body").appendChild(loading);

//   await this.analyzer(answers);
//   console.log(`this is analyzed: ${this.analyzed}`);
//   var analysisCounter = 0;
//   answers.forEach((answer, idx) => {
//     var analysis = "";
//     // console.log(answer)
//     if (Object.keys(answer)[0] == "open") {
//       analysis = this.analyzed[analysisCounter];
//       analysisCounter++;
//       // console.log(analysis)
//     }
//     // console.log(answer)
//     const newAnswer = {
//       user: "Ara",
//       question: questions[idx].querySelector("label").innerText,
//       content: this.extractAnswers(answer),
//       analysis: analysis,
//       resultNo: surveyNo,
//     };
//     newResult.answers.push(newAnswer);
//     this.props.newAnswer(newAnswer);
//     // return axios.post("/api/answers/new", newAnswer); //hits routes/api/answers.js backend
//   });
//   this.props.newResult(newResult);
//   // axios.post("/api/results/new", newResult); //hits routes/api/results.js backend
//   localStorage.setItem("surveyNo", surveyNo);
//   this.props.loadResults(surveyNo);
//   // window.location.assign(window.location.href + "/results")
// }
