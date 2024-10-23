
const parent=React.createElement("div",{id:"parent",xyz:"abc"},
    [React.createElement("div",{id: "child-1"},[
       React.createElement("h1",{},"I'm h1 tag from child-1"),
       React.createElement("h2",{},"I'm h2 tag from child-1") 
    ]),
    React.createElement("div",{id: "child-2"},[
        React.createElement("h1",{},"I'm h1 tag from child-2"),
        React.createElement("h2",{},"I'm h2 tag from child-2")])
]);

const root=ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);