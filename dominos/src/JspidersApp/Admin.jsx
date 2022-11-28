import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { NavLink } from 'react-router-dom'

const Admin = () => {
    let {id} = useParams()
    let[products,setProduct]=useState([{
        "id": 1,
        "first_name": "Kelley",
        "last_name": "Stubbley",
        "email": "kstubbley0@myspace.com",
        "gender": "Female",
        "image": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAAJMSURBVDjL3ZJfaJJRGMaFYBdF910XSSukaRdFF7Mxkpozc0UI1UXksNQ7V0O0QocshElqTYL4ilhjzE0oahT4ZToHFWUb5Za5zyWNsk3dYNvxX/R0zgJZsHXTXQdezuE9z/N73/dwRABE/xKi/wjQ2Ni4xWAwXHI6nQWO42Cz2TImk2k/jW30LLAcu2Mapv0DIJPJ6lpbW10ejwfZbBaCICASicBut6etVms0mUyWWC4Wi4FpmJZ5agCpVHrMbDYvJhKJglarHVEqlT/a29vh9XphsVjg7jqP8APtzws6bWhgYCDDtMyztgOXw+Eo+nw+vVqt3iyXy5d4nkc8HsdoNITEUz3yqQAmH53yMA3TMk8NIJFILur1+oXe3t6Otra2Z01NTRWFQgGNRoNbXScwP9WH6vI0JgKa6jBn8zAt89QA9XSpVKqpnp6ehcHBwXwwGITf74fDZsJ44CRK849R+upGQXiC8N0zleNq1UfmqQHEYvEm2nZDS0vLjE6nWzYajUWTyVgO31GP5ZJDKH1xIHp9Hyr5IcS5ZvTbD5mZ56//4H3/0SMzvBXlufsg0+cQ7ZaimOnEYnoEr28enHzlObB1Q8D4vcN177jmNwv04YqfO7DySfs7UmfpKDeQiXgx5pJd3RDw9rbcmIm6Uc76V6uvpE7TEWSrO0kbQL49RLRL8j1i37N7XQBtb5bkBJQLPEpz9A3mAmtiGNWlD5h92YfnVnFgXQBtLxfrbiCjzr2EViK0EnlxrZ6Er+wi1ER4y07Cd+4gocvbR38Bt2OvTVFKHBsAAAAASUVORK5CYII="
      }, {
        "id": 2,
        "first_name": "Else",
        "last_name": "Sharpe",
        "email": "esharpe1@gravatar.com",
        "gender": "Female",
        "image": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAAJwSURBVDjLfVJdaJJRGH4+dXyagylpDj8rhwuRfoXqqogCL2w3u+4i2EUEw5vY7UAUuvGq6xgUgUUULDJKcFHeSA2a1cXCbWjIgmVT0f36/fae0yS3sAMv7/nO+zzP957nPYJhGOiu2NsJ43ooioVGAZqhQ9O1vdCh6iouuC7hwYtHyN55L3Q5FvQsVVGhG3/AjKjq+l7+G7Ks9lJg2idARdaQohFQU+HWJITly7RXoGp7tY7SX0AhARGHIJqsJKJiRA4hYAnBrgxBNNtgMwYJ83+B5OL3bzgqjsIBF4bkw3A6nTiunMCINYiFL585pq/A4xuz8fziu2RttYGQEcawZxgOhwNHtiT8XK7jzcfXyU+pr/FejsCmUCwWbaqqBinMiqLg+fKT21e9kVtng+c4aG1tDc8+PM2cGjqTYHVZlkH519TUVJULzM/Prw4MDEgamUciPFjrJpMJnU4HFosFtVoN6+vrjMjr7XYbjUbjJh8jHU7u7OykJUkaZC23Wi1sb2/zYD9gwh6PB4FAAKIosh+iUqm8JN6s0H1IuVxulA5eeb3eoNVqxcbGBieyOgt2ptO7yGazGuHiiUTi7j4TI5HICt3t/NLS0ixr02w2cwILJkBXZOQGYaJd8j9TGB8f3yRArl6vcwHmAcuCIHAR8mMzmUzm+o6RLQKNuVwu3rLdbsfu7i43lO0pHyPnT/cVmJmZsVEH13w+H6rVKjKZzEo+n39YKBTQbDbh9/uZ4WN9BYh8xe122+iuzOn79B2Ox+MTpVIpmk6nfzA/DgpYDrQvlcvlChEnp6ens93zVCqVjcViJ+fm5u7RG7jYy/kNO+KHFL4q4agAAAAASUVORK5CYII="
      }, {
        "id": 3,
        "first_name": "Freda",
        "last_name": "Dyott",
        "email": "fdyott2@uol.com.br",
        "gender": "Female",
        "image": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAAHXSURBVBgZpcE/S5VhGMfx7+8+T2VI0SDVKvYSrKE/0FsIwgZpCFqiISSiIcoigkIosWyrOR16AU2NETSGZUQoiNYgBJ1znufcz3VdeUvOIX4+igj2QhemFq6fPT/+ZLMXwxGAO+GOuREeeDhhhkcQZpg7h/fn7tLS2u23Tyfmq/Ez43P7hobTsSF2Y7jbszlgvurlSL3NP+xWP0diSxUWPJo8wW5dfbxCUUU4xaA1AggPzMEJ3ANzx9rA2sDCGVgwevwQ5kZREUGhJBRBJBEK5CIlISUkQ52g44mqDQpvjaIyN4oEhASCToAL3INOQFKHSmAKLDmFm1NU4cE2CSJIQEggkCAscMHsp4d4G9w4eY/C3SiSu7FDEkgUCUgSqhIzH+7SH3TpNr+ZfjdF4e4Uqc2ZbRKSKCSBhHnL/fc3yblhbGSM0aNj1LnLlVeT5NxQpDCn6AACJCFAwPOPM/zcXKeuG+p2QN02HNh/kNWNFX6lBYrk7uwQkIAk0ZG4dfoOry++YXn1G02uaXLN8vdlZi+/ZCRfoqjWfqwsXnuWJ9wMN8fMcHcsZ9wdj6B/pKbfNmTLbKxvMD37hS2LbFFE8D/nHpyKpsnkOjMYZD6/+Cr+UUSwF38B/pkb32XiUiUAAAAASUVORK5CYII="
      }, {
        "id": 4,
        "first_name": "Shayne",
        "last_name": "O'Donovan",
        "email": "sodonovan3@nsw.gov.au",
        "gender": "Female",
        "image": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAAG5SURBVDjLpdHNa9MAGMfx/BtBvO/i26XBw0DEocLUSift2Lp2LupYFh2CVLA6rIMVmqaiqxDZxaJQNehSspCksdYXRNGJzOKmNz0IDpRSvH+9SBVEaNgDD8/hgQ8Pv0cAhM30fxfl5k8KfpvZ2gYz1S+EBgpem1etNk9XfpBeXA8PXFz6RvP1d9xnGxwtvg0PqLc/kzLWiGor7L30PDyw6RABwXEcLMuiJ6DRaBAEAZ7nYds2pmlSqVQwDANd18nlcmQyGVRVRZZl/gFc16XXs5PJJKEzOLMwnD29kOic1I8wPLenc/D89iwgCDNPJlAfp5l6NMZkfaQrp5aHSFiHiN7bT8I4wOX749itMu+++pTqU8RL29hxbivCdCOF9cnk4ce7TLjxLhBfGuTGGx3t5RVG8/uw3l/F+nANAC04QSk4RWRaRJisj/JgvYq5dofU8lAXOFwdIP9ilmzzLIMXduG0Fvm7aqtlJEVEkN0E484xxuwYI7VoFxi41U//zQiR6zvZrW6h4B9n3k8DMO+l/1zQS4CSIs7FtD6KvkxttUzRl4lpfUiKqPX8BUkR85IidiRF5PfMA8IvzWTWMhb2/CMAAAAASUVORK5CYII="
      }, {
        "id": 5,
        "first_name": "Kip",
        "last_name": "Ellit",
        "email": "kellit4@webeden.co.uk",
        "gender": "Male",
        "image": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAAJeSURBVDjLhZNdSFNhGMc3z9lUREVnGmgzEZa7kGBe6kWYg26syz7uoqKgEOpiUjfdjALJiwmDYKSMburm7EInG8yNttm+UitwQm26sVgrcSPWvtf5977HbSyc9sB/73ne53l+7//snCMCIKIiIVYqlVM6nc6vUCgukZylexWxKpVqwmAweGgP3avN0Z8QWTxEAbMZ8XgcvuVlIQ9VRK83LRahtrG6WqtVDhaJafK5uRlBtxuxWAzbZP3IMDhoahK0JRYjuL4u1GjPVgVQcXcI+NLWBs5oRCQSAbe0hM2eHkS7uxHt6MCH1lZwi4uHNbLuNALsd3ZibWQELwcGYBscRFgux15/P3Z7e7FDQOb2diy0tGBFKkWcODoCSMtk+DE+jsTYGL6PjiJGYNHhYewRUJiAQn19+Epchbq6cMCy/wJ8Ph/K5fKxKpVKyOVygmjQPTpzLCCTySAQCCCZTMLv98Pj8cBCngINnuf/D6DDJpNJOLlQKCCRSMDpdAp5sVhEPp+H1+s9CqANVQjHcbVmm82G7dfP8f6mEraLEjiuyfFu7n5jQFVVAD3d8eIhPmkmkDPPgw9akHnzCIEH52GdZGdOBFD7drsd9utnkSXDWJgGZruAZ0PYn7sA6xSzK7zKFECG/tQDqKj9dDot2OY3ONRH6ulp2CZZXgDQe0ylUr8opP7PpA6y2SwcV8/g96tbABnKa0RIEkXvMbCqmW8CQK/Xw+FwwOVyNdb8DHx3ziE+O4SfjyUI3xZj7bIUFjXzRABotVo3+Yxxkt5qbmDlyiliWwLztAzGu+oUnf0LtxKkWPCjmmgAAAAASUVORK5CYII="
      }, {
        "id": 6,
        "first_name": "Ardine",
        "last_name": "Ord",
        "email": "aord5@odnoklassniki.ru",
        "gender": "Female",
        "image": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAAKFSURBVBgZBcHLi1V1HADwz+/cc1/j2Az4qiYjhQoXIg5lr11tWgi5aWWLwB64FMJdu5Ya/QVFbkKiNrVKMAmipLI2UZJMZcmMM+k8LnPnnnPP+X37fNLHX9y4mHM6Pa7zoGoAABAAQLdk0PXRG6cWz0GZI7128oWD+waDQUqpAwAAACaZtpn6/Oqt13EOynGV+/3+IF26tm7inlG66dCBVcPupiay+1tDv96aMxNHlPZ459VD2pwSQFk3FEVHkaiLFYf2rur3/rZZjTRto+z3HT74kD+Xdpnv7ZUzAFBCRlEkVazpdddt7Gyq2om6aTSxrd/v266G9gwLIRAASsgoUhJNVrVTk6ayM63UudFmpKnIrbJIIgIAlBBBkZKBfUbby6LTtfzbebv7jOtGOdszk3es/Dfy/qd/yNGZO3Phelz9+c4zJURQFMlsZ8GdlbvmBst2xhMvnnjSK4uzvvz+X++ePgIALl1bk3O6XgQiKIpktrvfw8Pj1n9ZN66m7o8acOXHuwAmDVsVaxu1lLISIrh57y1tztqcPVGtWe4lnWDaZhfPLso5BDrCTElVVba2a2VESHh58RyAztENP3xVmFRT713+S5Fo2iy3WSAiCGa6WZlAAIB2OK/JoWobnaKLkLRSSiKHiKxppuq6UQ66aVOezh078CwpCRBG4590U+nsyd2aXKMgiJQNyp4Ln9x2b2tb2SvT5c++XnqubuNoBABtjrmOrmzHhzfetnfmUUlhbfyPN5/+QGFgXNXKM6eOnwcAgG9ufhePPciB2ZGXjp0w31ugYGOyYP+uxkyPMiUpIgAAwFNnr3z7+CPD5+f78wblA5o8lXKWopXT2O+3l6xuTf0PNZJB+2NWN98AAAAASUVORK5CYII="
      }, {
        "id": 7,
        "first_name": "Holden",
        "last_name": "Cornelis",
        "email": "hcornelis6@shinystat.com",
        "gender": "Male",
        "image": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAQAAAC1+jfqAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAAC3SURBVCjPvdCxDYMwEAVQSxQ0CImKKldE19FRITeu3LihiGQGYYKbIBtkgtuACdiACW4NcgEnpKJE11j6T98+m9Wcj7kERIqsM6ymHwJ7dvQJmhvSryFK5N1rLFtc4gT8Bx4JOO42gC+Y6wM8pJ/D6Ec3dnOrAJ9ga64O0EtIDS3fBS0sGi/FklMCQXwCjQIoa1vZYsqnrEnAi0sAGWQ/5Zx9r/CkT+NW18QBWMu39TIydN1Xn88bUK7xEQPM95QAAAAASUVORK5CYII="
      }, {
        "id": 8,
        "first_name": "Augusto",
        "last_name": "Brosetti",
        "email": "abrosetti7@washingtonpost.com",
        "gender": "Male",
        "image": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAAHlSURBVBgZpcE7a1RRFIbh95yZXEaSSLwWFkFEkICKhWhhIV7AxlKsbSz9DQpa+gfsbERQsUhnEYOFFiJoYSrBO6IBY5I5c2bvtfb6jCIIYjfPU0liFDUjqhlR99r9FfEfHoFZkNwxg9ZFm5xkTptFY0HbOl02Hdvf4y/hIUoRHsKLMBcWgZkwD6wE2YNbi1/p8sf6wCkBHsJLkIswD8xF9iB5IZtIHmQLtk11aftOl03nDk/x6NUGpw9OsTYo3H26yoXjs/TGK8Qmwav3A5aW17h0cjfJg9tL34jWqJM7gxTMTnWIgImxmjYXeuMVNxe+UAFX731kbuc483t67Nk+zt5dk7QWROPUTXKevWk4um8LD5+vMjlWcfnMTrqdin4qCGhSIQJOHJjhl41hIVlBTaHut+LU/DSPX69z9tAMgxTcePCZZKIZFiRohoWQePmuz4eVhARDE5Ey9VqbsSKeLK/TqSsk6CdHEk0qIGhyIQQ3Fz7xY+Bs7XW4fnEOJVGdvr6s80dm+fQ9kS1IHiQT2YPkQfbAPDAXVgIrwkPM7Zhg8c5buusbTpsL05Md8ljFpFXYhHCvMK+xEFZEKYEHlAgkkPit2nflhYatIxORAmVHFigVyIFKIAvkggj+VUliFDUj+gngimmFTeOsxAAAAABJRU5ErkJggg=="
      }, {
        "id": 9,
        "first_name": "Miguel",
        "last_name": "Storry",
        "email": "mstorry8@microsoft.com",
        "gender": "Male",
        "image": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAALVSURBVDjLdZJdSFNxGMafc3Y2PdN2pGYjsdS2WFu1oiy8KKSINPqAGtgwhMgKrMAkiIigu7oIvRDCPjCKgj7og27sg6ALg75EW2roMldGpbk2t7nV/uer90RF2Drwuznv+zzn+f+fwzU1NfVpmlZCfGltbXUiy+P3+1/LsuxUFGW4o6PD8/dMIKFLVdVLxK5AIKBnMyCxQQtRPXUmkDCH2ErucmF9i5LL54ApOpgG7C48hdn5QN2BJwKJKwnvVAOehK+INiL03HxWTIlxkbfaRV20i2H4REkcFRljQ8QFIvhPAhLaiEpCkcwv0ZnqQrmpGbzqxv3oFgQnFoGxHQp9fRshZTOQiTANFzlygOUz8jHB9mIy7UM0vg6hZKFxfo0wdhz/GNBL9stgQZXDCQtnhYIypKRxoOgyNE5GO2PQVPld/Spu/ciNqheZ8Y+n5zX0tRsGXE1NzQiJow6HY3EsFstWAnp7e7/5l6ixxsbqIslbi8iTluinF93blx4J3TMSJIg74XBYcR+7s0ykFmQVYFRovf0MivM5nDz4KrJ/z4piyV2O1Pu7ME9zTy+Yk7l5t3HuLp5u1kKUEaanmRNIqMMU1+geeJucCZvSg3K31Vbg28ip6TfItRdBsAKzKpdYnd45bQIJzZSgjOD+10Lex81Mjr0Db4qA41Ow2CLA9zQmP2dMxhHixDWiYWoL1i9erGFPYVtTWqAp/eC1CfpzpkGXGQauDn7vH0zsMRIsJnEtUbraXqJbOBGyWAwpGcLcTA/nrqiFzh6YOXUU3bdjyMt8HjNxHELDiX11V8I3DQPSyucsFsv5B4fH/tz8gbUaPBt2gkXaIAgS+h9OZo62D6mHF4rzcvNMCFwcSf5c9Pl8Ax6Ph7lcri5d1/GbD7eqn2XGjuupwU364+YKdaW7QOd5fujvHQMhGAzOz9b9p3DkYSL+qDQdTX17H/p6qHMgdj3b3g+UOcQZKOdjkwAAAABJRU5ErkJggg=="
      }, {
        "id": 10,
        "first_name": "Annalee",
        "last_name": "Duligal",
        "email": "aduligal9@goo.ne.jp",
        "gender": "Female",
        "image": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAANRSURBVDjLXZNPTFt1AMc/77WltH0F5I9U1sqgc0qFxYNGlODiEj1sh0kC0WkUD2qiNxM9mCVc3IhGd0E9mOjiZdFkzJg5iI5ljARoNPvDwsZgDLvRCaxA4bV97/X9/Xkxhvi5f7/J55t8JSEE2qgkAwNAD2AC3ZGDwmQH2qjUCJwHysBbkYNiAUDa+pkAcDyQeOP1ipZ3dhmZ73Pzq+ri6fAZB+j4Nz/bq78qpxKxlD9YJ5nzx+4AvTU9Iis9+JGjla1vflDZ/FpTITO8fS+74L/QdFZRgi6hgAeAYctYhsaBtV59d9thfG5B02+dyAKdsmUiS5XNlVuLw9uLSwvKdOInpSVqUWsYmH/l0RbzKAWNWLSCq40nwquZ6UpfXWetCLUplkmrtPQt3bYU/m5T3hOfSv4SToT9BHWXfXtqqamSEUjkVZc/59exQz4i+TM8oQ2bgdLcXFAUjkhCCD4+ee4LX83uj5KNCjWmoO9AC1uqyoZmkGiKAeAIODW6hKcI1nKrbGj+wW/efu6oDLDqND3jCfCKFu1769AdQSAQYOz33yioKrZpcn5snNTeetScgSE/hGoFuwD8AKahdTiWhGp61NWFMF1BJBzm/vIyYxcnmL0+g/HYBYyVEooxBDURTEPrAJABLEND020My8N0wfYgpxaJKAqz12c49EoPlnCI17exIr9LSdewDI2dBbOFoo7k98is6biSzJcjh8g1nkZN/soP1/qpV+K0xZ4lUfc4d4t9mOX1uZ0Klwqyf39eCZK+9oBUshrHs3jpyX5c4eF6Lh6CFTVLR7yLkmVwpfxe175j/dV+AKusnbPKWt8t15eS4w4nhwVlx8IVHvc2F7E9B8ezsV2bglnkqUQ3JVuX/shMbsoAk0PvX7bL+lAysq3PZja5uZyl7JRxXIfGqkeJVTXzSHUrAV+IhugurmanmFqaXNctnpaEEACk0+kXo9HoxdzGljswfNv3cPsgZcvC8izKjkWyPkVn68tcXp5m4s54Xrfs7pVBMecHGBkZaQDONjQ0oJVUtbR192t14sj+nWe6kvrseUkOBW7cv8En7V9Vx0Jx878R8/m8AfydTqdbgBdmTn16k//ROnBcG799KfBhy+fFCiNczBt5DeAfIAavfKIsB2UAAAAASUVORK5CYII="
      }])


    //   useEffect(() => {
    //     let dataurl = `https://gist.githubusercontent.com/TejasKale22/e5f4df3ff05e4f14aacad48836da97de/raw/8bf51cbf89ae470097480eb4fb9a02910bb7587c/my-cars02`;
    //     axios
    //         .get(dataurl)
    //         .then((response) => {
    //             console.log(response.data);
    //             let pro = response.data
    //             let selectedPro = pro.find((item)=>{

    //                 return item.ID === +id
    //                 })
    //                 console.log(selectedPro);

    //                 setproduct(selectedPro);

    //         })
    //         .catch((err) => {
    //             console.log(err);
    //         });
    // }, [id]);


  return (
    <React.Fragment>
        <section className="mt-5">
                    <div className="row">
                        <div className="col">
                            <table className="table table-hover table-light">
                                <thead className="text-black text-center">
                                    <tr>
                                        <th>S.NO</th>
                                        <th>IMAGE</th>
                                        <th>NAME</th>
                                        <th>PRICE</th>
                                        <th>QTY</th>
                                    </tr>
                                </thead>
                                <tbody className="text-center">
                                    {
                                        products.map((product)=>
                                        {
                                            return(
                                                <tr key={product.id}>
                                                    <td>{product.id}</td>
                                                    <td><img src={product.image} width={50}/></td>
                                                    <td>{product.first_name}</td>
                                                    <td>{product.last_name}</td>
                                                    <td>{product.email}</td>
                                                    
                                                </tr>
                                            )
                                        })
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </section>
                <NavLink to='/stu'><button className='btn btn-primary'>Add New Student</button></NavLink>
    </React.Fragment>
  )
}

export default Admin;