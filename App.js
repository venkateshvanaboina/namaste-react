
const heading = React.createElement("div", { id: "parent" },
    [React.createElement("div", { id: "child" },
        [React.createElement("h1", {id: "heading"}, "I am the first paragraph"),
        React.createElement("h2", {}, "I am the second paragraph"),
        React.createElement("p", {}, "I am the only paragraph"),
        ]
    ),
    React.createElement("div", { id: "child2" },
        [React.createElement("h1", {id: "heading"}, "2I am the first paragraph"),
        React.createElement("h2", {}, "2I am the second paragraph"),
        React.createElement("p", {}, "2I am the only paragraph"),
        ]
    )
    ]
)

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(heading);