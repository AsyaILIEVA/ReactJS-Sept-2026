// function Body() {
//     return (
//         <main>
//         <p>This is the main content of the app.</p>
//       </main>
//     )
// }

// export default Body;

import Article from "./Article";

export default function Body(props) {
    return (
        <ul>
            <li><Article title={props.articles[0].title} content={props.articles[0].content}/></li>
            <li><Article title={props.articles[1].title} content={props.articles[1].content}/></li>
            <li><Article title={props.articles[2].title} content={props.articles[2].content}/></li>
        </ul>
    );
}