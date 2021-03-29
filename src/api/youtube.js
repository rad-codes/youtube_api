import axios from "axios";
const KEY='AIzaSyBhO96rWIKy9p3SiVD6IEuF-Ebj60bT4CI'
 export default axios.create({
     baseURL:'https://www.googleapis.com/youtube/v3',
     params:{
         part:'snippet',
         type:"video",
         maxResults:5,
         key:KEY,
     }
 });
