import { reportsDataDummy } from "../src/datasets/reports";
import axios from "axios";
import FormData from 'form-data'
// import jwt from 'jsonwebtoken'
import { jwtDecode } from "jwt-decode";
export const menuItemsTest = (allReportsData) => {
    console.log("all Reports from menuFunction", allReportsData, reportsDataDummy)
    let reportsData = allReportsData ? allReportsData : reportsDataDummy.value
    let menuItem = [
        {
          name: "Workspace",
          exact: true,
          to: "/",
          iconClassName: "bi bi-speedometer2",
        },
        {
          name: "Reports",
          exact: true,
          to: `/report`,
          iconClassName: "bi bi-file-earmark",
          subMenus: [
            { name: "Courses", to: "/report/courses" },
            { name: "Videos", to: "/report/videos" },
          ],
        },
        { name: "Dashboard", to: `/dashboard`, iconClassName: "bi bi-view-stacked" },
        {
          name: "Tiles",
          exact: true,
          to: `/tiles`,
          iconClassName: "bi bi-border-all",
          subMenus: [
            { name: "Courses", to: "/tiles/courses" },
            { name: "Videos", to: "/tiles/videos" },
          ],
        }
        // { name: "Design 2", to: `/design-2`, iconClassName: "bi bi-vector-pen" },
        // { name: "Design 3", to: `/design-3`, iconClassName: "bi bi-vector-pen" },
        // { name: "Design 4", to: `/design-4`, iconClassName: "bi bi-vector-pen" },
      ];
      let reportSubMenu = reportsData.map((key, index)=>{
        let obj = {
          "name": key.name,
          "to": `/report/${key.name}`
        }
        return obj
      })

      let updatedMenuItemList = menuItem.map((i)=>{
        if(i.name == "Reports"){
            let obj = i
            obj.subMenus = reportSubMenu
            return obj
        }
        else{
            return i
        }
      })

    //   console.log("updated",updatedMenuItemList)
      return updatedMenuItemList
} 



export const login = () => {
  const axios = require('axios');
  let data = 'client_id=18fbca16-2224-45f6-85b0-f7bf2b39b3f3&scope=https%3A%2F%2Fanalysis.windows.net%2Fpowerbi%2Fapi%2F.default%20openid%20profile%20offline_access&grant_type=refresh_token&client_info=1&x-client-SKU=msal.js.browser&x-client-VER=2.32.2&x-ms-lib-capability=retry-after, h429&x-client-current-telemetry=5|61,0,,,|,&x-client-last-telemetry=5|0|||0,0&client-request-id=bd49270c-3b6c-4545-b711-d813fc16d138&refresh_token=0.ATUAlxxRAj2I0ESX5PcmzTpnaxbK-xgkIvZFhbD3vys5s_M1AKo.AgABAAEAAAAmoFfGtYxvRrNriQdPKIZ-AgDs_wUA9P91TpB2iKaN4y6svalhB5W4RCoLTc9Nq52MBjwep63XUzgoEJMlmpsrCon3Q-WDkppT_02DBVzORGVZMsWk7DsnZ7GFEFEOWpB_M-DDwagSZhxz87VR2ec_22V4kYKbz7WVnVvDN3A5oBEhj6Zetuqh6dpiVfzTidz0p2w3g412qsUUVhjcQ07qAhStIe6M8uhhfKbklrWjhCgZaWoiqH1xY7WLm8mEtCerT-Q7NL7owjlS9bcb0hk8sTqi6bdXL9AB8UGN8Z6Zilue4kKykX96m2hfqQqAzChonhRjii9SCwDTCKw6cYc8d9CNwO1b0dtB_XWJ9nTea6D9ENPT3SN2z60Y8hny3uMauJo_uAYkFgUdHpH_3-ok6Nb88yJCTL14XWompO63pjqmw5mkDGmsqWvyzeJlPzwpNYMEkxL2GVvNTnfkB4fO9viisfryqUDspIWuTfxUTdYsEmVof-P0n0LZGyoxBVT4a2WtIjPf-fZlxEgwj7Tnsotj9Q6b1X0yx_hI8CQAbpDWRapX1fO7VoH7rB3ZBzTZSouinIq4j0Cf0Ypim-lOiUXlitrQGLAxPZd_s4hXRv9JYvZ6anjFM8-v7oHKqAn3aQ3FVcua0CuHLs8_ijx36Jr-exE5xeIrVoTwTBuGyadj2NbVPsvx9eUiulc-neQtexwVBcZzbg6vxxMRacGKfnuF3eZ5MhNUtH9EEg1N9-etfxdxV46UJm3WzH2qxNlz3B_7h-k7eouAz63zFYRtsLjsGEOGnvr0UOjU8sRTPFWy-CDFdISLL-slTXdteHK3-LMbRlv1bRuyTN2qe6miZgTu1vRSjJnqlqU9ICfeDzIpjBbPyOU1toDaomok1fsuIh22ngAm2z5NU5ODV6A04_BvXBfjy56VS-T75K_XJmIeD3BFcC4';
  
  let config = {
    method: 'post',
    maxBodyLength: Infinity,
    url: 'https://login.microsoftonline.com/02511c97-883d-44d0-97e4-f726cd3a676b/oauth2/v2.0/token',
    headers: { 
      'Accept': '*/*', 
      'Accept-Language': 'en-US,en;q=0.9', 
      'Connection': 'keep-alive', 
      'Origin': 'https://learn.microsoft.com', 
      'Referer': 'https://learn.microsoft.com/', 
      'Sec-Fetch-Dest': 'empty', 
      'Sec-Fetch-Mode': 'cors', 
      'Sec-Fetch-Site': 'cross-site', 
      'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/118.0.0.0 Safari/537.36', 
      'content-type': 'application/x-www-form-urlencoded;charset=utf-8', 
      'sec-ch-ua': '"Chromium";v="118", "Google Chrome";v="118", "Not=A?Brand";v="99"', 
      'sec-ch-ua-mobile': '?0', 
      'sec-ch-ua-platform': '"Windows"', 
      'Cookie': 'buid=0.ATUAlxxRAj2I0ESX5PcmzTpna6aqWkfztfdGrUZUgrDfpqA1AAA.AQABAAEAAAAmoFfGtYxvRrNriQdPKIZ-o117MfTVUe4ISD290PwmUXT-18vl2MOb7LmLnGxbJUu7u-lW4lpstxt8Vy_30QR739p08Zkd15n7RI1g6KgpWZiw10UH4DFzLNzTBA22IPkgAA; esctx=PAQABAAEAAAAmoFfGtYxvRrNriQdPKIZ-wkcUhpQwCYwl7yAwk8zVrxwvuUFSDf3VCeIb41gxzArdEntaJDrPv41p7VdKYPgzlCL0Lu6eKpES-jIukR5jcjLk-IDARw6plD2cq5fParAMTysi3JtL3zQrMOgd8Cm46fdviQTKJwfR5GZXaamPoHSX9pLSJZNAswqb0Yh41fggAA; esctx-9Gbuin5eWYE=AQABAAEAAAAmoFfGtYxvRrNriQdPKIZ-BHwLfXztr1-RhmkxFmRSjH5ESR1-BusbCfo0oRysQIqPWvpLftbTBdTK3yjEa_2C17A_8re6HBPvK2gQqsxEeUrCugfivuhpkFaaRjr7xvuEGgWCUoTyUKh4uRStwNq06ZZSkXk4uTRr2fhAWZj6-iAA; esctx-HBUsR2yQyC0=AQABAAEAAAAmoFfGtYxvRrNriQdPKIZ-FnM0M9X3JceDPhTgKbZ4lYr71Rry7Z4YXCb7LTd9UfGZIsSt6XyG6fJmq42IO-ZSLn0srz8NUyb2TB1mtKruRGDc_BCmx3VhHvPQj1Ll1Bf5ORnXem1mwd1tAg2NxuUlJrpNTW5mOu7P1AdXkPzDMiAA; esctx-Iu6BiNQYQJs=AQABAAEAAAAmoFfGtYxvRrNriQdPKIZ-M67ZptO4-fGhOQLI7ZK1SCPj40gW4GHdQpijQK3ItS-hcwBE_27V281PF7yXtUcZYVtGsAbbopH-sqeI5LG3cGhRIixwMKl1fByZ-ENrhj-orW9JGcEWPlnb_EZS0My-Bv0olNdVebTgTtdZtXuRKiAA; esctx-irTZP1z0UM4=AQABAAEAAAAmoFfGtYxvRrNriQdPKIZ-EGKsXORCWAFqy0ZfA92m8lxg64bsy7gV_5Qf4pL0FpAQRpH_fPk_GnhVVTKDOo-ARakfb6GbNA--Eo1IiiK1K8W4PRBJvn_SYzNGHbzvi_jRX3R5949IGofAtXUnNHMgJQHVv3dzVth_yriwTV2QjCAA; fpc=AvRfHCHVhjlFiudn6pynQdAdBwNVAQAAAM5m5dwOAAAA; stsservicecookie=estsfd; x-ms-gateway-slice=estsfd'
    },
    data : data
  };
  
  axios.request(config)
  .then((response) => {
    console.log(JSON.stringify(response.data));
    sessionStorage.setItem("access_token", response.data.access_token)
    generateEmbedToken();
  })
  .catch((error) => {
    console.log(error);
  });
  

}

export const generateEmbedToken = () => {
  const axios = require('axios');
let data = JSON.stringify({
  "datasets": [
    {
      "id": "d786cc57-751d-4719-96d6-56eb0eeadfe7"
    },
    {
      "id": "87e94aa4-da3c-4b9f-99f0-a2def6ed1494"
    },
    {
      "id": "1675982d-ec77-49b8-9e03-fa6f62a7156e"
    }
  ],
  "reports": [
    {
      "allowEdit": true,
      "id": "f1f84fe6-fbf9-4ed4-8a32-a7d986bcd0c6"
    },
    {
      "allowEdit": true,
      "id": "cfca6fc8-0cf3-4472-b72f-e92b4f8ae713"
    },
    {
      "allowEdit": true,
      "id": "9a3b9438-63a4-417c-a593-786e59c5f5da"
    }
  ]
});

let config = {
  method: 'post',
  maxBodyLength: Infinity,
  url: 'https://api.powerbi.com/v1.0/myorg/GenerateToken',
  headers: { 
    'Content-Type': 'application/json', 
    'Authorization': `Bearer ${sessionStorage.getItem("access_token")}`
  },
  data : data
};

axios.request(config)
.then((response) => {
  console.log(JSON.stringify(response.data));
  sessionStorage.setItem("embed_token", response.data.token)
})
.catch((error) => {
  console.log(error);
});


}

export const getAllReports = (workspaceId) => {
  // console.log("isTokenExpired", isTokenExpired)
  // console.log("checking expiry", isTokenExpired())
  const axios = require('axios');

  let config = {
    method: 'get',
    maxBodyLength: Infinity,
    url: `https://api.powerbi.com/v1.0/myorg/groups/${workspaceId ? workspaceId : '6cceba03-8d48-4e74-a924-fd93b2b03656'}/reports`,
    headers: { 
      'Authorization': `Bearer ${sessionStorage.getItem("access_token")}`
    }
  };
  
  return axios.request(config)
  .then((response) => {
    console.log(JSON.stringify(response.data));
    return response.data
  })
  .catch((error) => {
    console.log(error);
  });
  

}

export const getAllWorkspaces = () => {
  const axios = require('axios');

let config = {
  method: 'get',
  maxBodyLength: Infinity,
  url: 'https://api.powerbi.com/v1.0/myorg/groups',
  headers: { 
    'Authorization': `Bearer ${sessionStorage.getItem("access_token")}`
  }
};

return axios.request(config)
.then((response) => {
  console.log(JSON.stringify(response.data));
  return response.data
})
.catch((error) => {
  console.log(error);
});

}

export const workspacesDummy = () => {
  let data = [
    {
        "id": "6cceba03-8d48-4e74-a924-fd93b2b03656",
        "isReadOnly": false,
        "isOnDedicatedCapacity": true,
        "capacityId": "223390BC-21CB-4E88-B2BC-B0FD3CAF17F5",
        "defaultDatasetStorageFormat": "Small",
        "type": "Workspace",
        "name": "PBIEmbedded"
    },
    {
        "id": "d4dd5a98-5179-441f-bc14-50bf616d258f",
        "isReadOnly": false,
        "isOnDedicatedCapacity": false,
        "type": "Workspace",
        "name": "Test1"
    }
]
return data
}

export const isTokenExpired = () => {
  let token = sessionStorage.getItem("access_token") || null;
  console.log("token cheks",token)
    // const decodedToken = jwt.decode(token, { complete: true });
    // const token =
    // JSON.parse(localStorage.getItem("user")) &&
    // JSON.parse(localStorage.getItem("user"))["token"];

  if (token == null) {
    return true
  }
  else{
  if (jwtDecode(token).exp < Date.now() / 1000) {
    return true
    // next(action);
    // localStorage.clear();
  }
  else {
    return false
  }}
    // Check if the token has expired
    // if (decodedToken && decodedToken.payload.exp) {
    //     const currentTimestamp = Math.floor(Date.now() / 1000);
    //     if (decodedToken.payload.exp > currentTimestamp) {
    //         console.log('Token is not expired');
    //     } else {
    //         console.log('Token has expired');
    //     }
    // } else {
    //     console.log('Invalid token format');
    // }


}