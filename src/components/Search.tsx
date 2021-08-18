import '../styles/search.css'
import LOUPE from '../assets/loupe.svg'
import { ChangeEvent } from 'react'

interface ISearch {
  flagFunc: (flag: boolean) => void
  setSearchData: (value: string) => void
  searchData: string
  pageInfo: any
  setPageInfo: (value: any) => void
}

export const Search: React.FC<ISearch> = (props) => {
  const submitHandler = (event: FormEvent) => {
    event.preventDefault()
  }

  return (
    <form className="search-item" onSubmit={submitHandler}>
      <input
        className="search-item__input"
        type="text"
        placeholder="Search"
        value={props.searchData}
        onChange={(event: ChangeEvent<HTMLInputElement>) => {
          props.setPageInfo({
            ...props.pageInfo,
            page: 1,
          })
          props.setSearchData(event.target.value)
        }}
      ></input>
      <button
        className="search-item__button"
        onClick={() => {
          props.flagFunc(true)
        }}
      >
        <img
          className="search-item__loupe"
          src={LOUPE}
          alt="search"
          width="20"
          height="20"
        />
      </button>
    </form>
  )
}
