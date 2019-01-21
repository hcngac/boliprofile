var page_data = {
    "card": {
        "research_interests": [
            "Content distribution networks",
            "Peer-to-peer systems",
            "Internet topology",
            "Cloud computing",
            "Green computing",
        ]
    },
    "biography": '[p]Bo Li is a Chair professor in the Department of Computer Science and Engineering. Hong Kong University of Science and Technology. He held a Chang Jiang (Cheung Kong) Visiting Chair Professor （长江讲座教授）in Shanghai Jiao Tong University (2010-2016). He was an adjunct researcher at Microsoft Research Asia (1999-2007) and at Microsoft Advance Technology Center (2007-2009). He worked on high performance routers and ATM switches in IBM Networking System Division, Research Triangle Park, North Carolina, USA. His works covered a wide spectrum of topics in computer networking and communications, more recently on datacenter networking, cloud computing, big data analytics, learning optimization, IoT, blockchain technology, Internet content distribution, and network control algorithms. [/p][p]He made pioneering contributions in the Internet video broadcast with a system called Coolstreaming, which was credited as first large-scale Peer-to-Peer live video streaming system in the world. This work received the [b]Test-of-Time Paper Award[/b] from IEEE INFOCOM (2015). He has been an editor or a guest editor for over a two dozen of journals and magazines, mostly in IEEE and ACM. He was the Co-TPC Chair for IEEE INFOCOM 2004. [/p][p]He is a [b]Fellow of IEEE[/b] for "contribution to content distributions via the Internet". He received the [b]Young Investigator Award[/b] （港澳杰青） from the National Natural Science Foundation of China (NSFC) in 2004, and the [b]State Natural Science Award[/b] (2nd Class) （国家自然科学二等奖）in 2011. He served as a [b]Distinguished Lecturer[/b] for IEEE Communications Society (2006-2008). He was a co-recipient for six [b]Best Paper Awards[/b] from IEEE, and a Best System Track Paper in ACM Multimedia (2009). [/p][p]Bo Li received his B. Eng. (summa cum laude) and M. Eng. degrees in the Computer Science from Tsinghua University (Beijing), and the PhD. degree in the Electrical and Computer Engineering from University of Massachusetts at Amherst.[/p]',
    "courses": [
        {
            "full_name": "COMP 3511 - Operating Systems",
            "link": "https://course.cse.ust.hk/comp3511"
        }
    ],
    "projects": [
        {
            "title": "Dummy Project",
            "short_description": "Curabitur sodales dapibus commodo. Aliquam et cursus sem. Curabitur feugiat sed augue a pretium.",
            "project_members": [
                "",
                ""
            ],
            "contents": ""
        }
    ],
    "student": [
        {
            "full_name": "Keith Alsop",
            "image_link": "img/avatar.png",
            "description": "Some quick example text to build on the card title and make up the bulk of the card's content.",
            "homepage_link": ""
        }
    ],
    "publications": {
        "journal": [
            ""
        ],
        "conference": [
            ""
        ]
    },
    "activities": [
        "Editor, IEEE Transactions on Mobile Computing (2005 - present)",
        "Editor, IEEE Communications Surveys and Tutorials (2007 - present)",
        "Editor, ACM/Springer Journal of Wireless Networks (WINET) (1999 - present)"
    ]
}

var research_interests_container = document.getElementById("research-interests-container")
for (var ri in page_data["card"]["research_interests"]) {
    var item = document.createElement("span")
    item.classList.add("badge", "badge-secondary")
    var text = document.createTextNode(page_data["card"]["research_interests"][ri])
    item.appendChild(text)
    research_interests_container.appendChild(item)
    text = document.createTextNode(" ")
    research_interests_container.appendChild(text)
}