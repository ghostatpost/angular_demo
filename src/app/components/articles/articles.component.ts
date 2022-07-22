import { Component, OnInit,} from '@angular/core' ;
import { Article } from "../../../interfaces/articles" ;
import { ArticleCalloutsComponent } from '../article-callouts/article-callouts.component';
const topNews=[
  {
  "id": 1,
  "name": "Business Standard",
  "author": "IANS",
  "title": "LinkedIn co-founder Reid Hoffman sides with Elon Musk against Trump",
  "description": "Hoffman said he supports people working to build a better future for the US and the world",
  "url": "https://www.business-standard.com/article/international/linkedin-co-founder-reid-hoffman-sides-with-elon-musk-against-trump-122071500837_1.html",
  "urlToImage": "https://bsmedia.business-standard.com/_media/bs/img/article/2017-09/09/full/1504978824-0548.jpg",
  "publishedAt": "2022-07-15T11:48:00Z",
  "content": "LinkedIn cofounder and executive chairman Reid Hoffman has supported tech billionaire Elon Musk over his war of words against former US President Donald Trump.\r\nHoffman shared his thoughts about the … [+2738 chars]"
  },
  {
  "id": 2,
  "name": "AOL",
  "author": "Tom Hals and Hyunjoo Jin",
  "title": "Judge in Twitter vs. Musk made rare ruling: ordering a deal to close",
  "description": "The judge overseeing Twitter Incs $44 billion lawsuit against Elon Musk has a no-nonsense reputation as well as the distinction of being one of the few...",
  "url": "https://www.aol.com/news/judge-twitter-v-musk-made-100646424-112242821.html",
  "urlToImage": "https://s.yimg.com/uu/api/res/1.2/k4RtZBb_leSDKUmcndmmWQ--~B/aD01NDA7dz04MDA7YXBwaWQ9eXRhY2h5b24-/https://media.zenfs.com/en/reuters.com/baae8c09834c564e3a7a122327810c8a",
  "publishedAt": "2022-07-15T11:22:42Z",
  "content": "By Tom Hals and Hyunjoo Jin\r\n(Reuters) - The judge overseeing Twitter Incs $44 billion lawsuit against Elon Musk has a no-nonsense reputation as well as the distinction of being one of the few juris… [+3752 chars]"
  },
  {
  "id": 3,
  "name": "bdnews24.com",
  "author": "Jhanguman",
  "title": "Judge in Twitter v. Musk made rare ruling: ordering a deal to close",
  "description": "The judge overseeing Twitter Incs $44 billion lawsuit against Elon Musk has a no-nonsense reputation as well as the distinction of being one of the few jurists who has ever ordered a reluctant buyer to close a US corporate merger.",
  "url": "https://bdnews24.com/world/americas/2022/07/15/judge-in-twitter-v.-musk-made-rare-ruling-ordering-a-deal-to-close",
  "urlToImage": "https://d30fl32nd2baj9.cloudfront.net/media/2022/07/15/judicial-officers-150722-01-smr.jpg/BINARY/judicial-officers-150722-01-smr.jpg",
  "publishedAt": "2022-07-15T11:11:13Z",
  "content": "Kathaleen McCormick took over the role of chancellor or\r\nchief judge of the Court of Chancery last year, the first woman in that role.\r\nOn Wednesday, she was assigned the Twitter lawsuit which seeks … [+3395 chars]"
  },
  {
  
  "id": 4,
  "name": "The Boston Globe",
  "author":"Sabrina Shankman",
  "title": "To escape high gas prices, many are searching for electric vehicles. They are nowhere to be found.",
  "description": "A global semiconductor chip shortage is leaving dealers with few EVs.",
  "url": "https://www.bostonglobe.com/2022/07/15/science/escape-high-gas-prices-many-are-searching-electric-vehicles-theyre-nowhere-be-found/",
  "urlToImage": "https://bostonglobe-prod.cdn.arcpublishing.com/resizer/MENQkuTDeWNj19pjqSpHI5AiML4=/506x0/cloudfront-us-east-1.images.arcpublishing.com/bostonglobe/G6JEDSXDWATHEMCIV7NZWRAD6A.jpg",
  "publishedAt": "2022-07-15T11:02:03Z",
  "content": "The introduction of new models, a proliferation of government rebates, and spiking gas prices have all made going electric seem more appealing and more affordable than ever before. But a global short… [+5895 chars]"
  }
  ]
@Component({
  selector: 'edureka-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent implements OnInit {
  public news=topNews;
  constructor() { }

  ngOnInit(): void {
  }

}
