import { Card } from './Card'
import '../styles/main.css'
import { ChangeEvent } from 'react'

interface IMain {
  flagFunc: (flag: boolean) => void
  setSortParam: (str: string) => void
  newsData: any
  radioFlag: any
  setRadioFlag: (param: any) => void
  pageInfo: any
  setPageInfo: (param: any) => void
}

export const Main: React.FC<IMain> = (props: IMain) => {
  const changeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    props.setSortParam(event.target.value)
    props.flagFunc(true)
  }

  return (
    <div>
      {props.newsData.length !== 0 && (
        <div>
          <div className="main-item__block">
            <div>
              <label htmlFor="title">Title</label>
              <input
                type="radio"
                name="sort"
                value="title"
                id="title"
                checked={props.radioFlag.titleFlag}
                onChange={(event: ChangeEvent<HTMLInputElement>) => {
                  if (event.target.checked) {
                    props.setRadioFlag({
                      titleFlag: true,
                    })
                    changeHandler(event)
                  }
                }}
              />
            </div>
            <div>
              <label htmlFor="date">Date</label>
              <input
                type="radio"
                name="sort"
                value="date"
                id="date"
                checked={props.radioFlag.dateFlag}
                onChange={(event: ChangeEvent<HTMLInputElement>) => {
                  if (event.target.checked) {
                    props.setRadioFlag({
                      dateFlag: true,
                    })
                    changeHandler(event)
                  }
                }}
              />
            </div>
            <div>
              <label htmlFor="popularity">Popularity</label>
              <input
                type="radio"
                name="sort"
                value="popularity"
                id="popularity"
                checked={props.radioFlag.popularityFlag}
                onChange={(event: ChangeEvent<HTMLInputElement>) => {
                  if (event.target.checked) {
                    props.setRadioFlag({
                      popularityFlag: true,
                    })
                    changeHandler(event)
                  }
                }}
              />
            </div>
          </div>
          <div className="main-item__choose-page-size">
            <p className="main-item__page-number">
              Select the number of articles per page
            </p>
            <input
              type="number"
              className="main-item__input-pageSize"
              min="1"
              max={props.pageInfo.maxPage}
              value={props.pageInfo.pageSize}
              onChange={(event: ChangeEvent<HTMLInputElement>) => {
                props.setPageInfo({
                  ...props.pageInfo,
                  pageSize: Number(event.target.value),
                })
              }}
            />
            <button
              className="main-item__page-ok-button"
              onClick={() => {
                props.flagFunc(true)
              }}
            >
              ok
            </button>
          </div>
        </div>
      )}
      {props.newsData.map((item: any, key: any) => (
        <Card data={item} key={key} />
      ))}
      {props.newsData.length !== 0 && (
        <div className="main-item__page-info">
          <button
            className="main-item__page-button"
            onClick={() => {
              if (props.pageInfo.page !== 1) {
                const res = props.pageInfo.page - 1
                props.flagFunc(true)
                props.setPageInfo({
                  ...props.pageInfo,
                  page: res,
                })
              }
            }}
          >
            prev
          </button>
          <p className="main-item__page-number">{props.pageInfo.page}</p>
          <button
            className="main-item__page-button"
            onClick={() => {
              if (props.pageInfo.page < props.pageInfo.maxPage) {
                const res = props.pageInfo.page + 1
                props.flagFunc(true)
                props.setPageInfo({
                  ...props.pageInfo,
                  page: res,
                })
              }
            }}
          >
            next
          </button>
          <p className="main-item__page-number">
            Max: {props.pageInfo.maxPage}
          </p>
        </div>
      )}
    </div>
  )
}
