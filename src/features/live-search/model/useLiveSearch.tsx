import { KEY_BOARDS, SEARCH_PARAMS } from '@/shared/config'

import {
  useState,
  useMemo,
  useRef,
  useDeferredValue,
  useEffect,
  type KeyboardEvent,
  type ChangeEvent
} from 'react'

import { useSearchParams } from 'react-router-dom'

export const useLiveSearch = (items: string[]) => {
  const [query, setQuery] = useState('')
  const deferredQuery = useDeferredValue(query)
  const [isOpen, setIsOpen] = useState(false)
  const [activeIndex, setActiveIndex] = useState(0)
  const wrapperRef = useRef<HTMLDivElement>(null)
  const listRef = useRef<HTMLUListElement>(null)
  const [, setSearchParams] = useSearchParams()

  const filtered = useMemo(() => {
    const lower = deferredQuery.toLowerCase()
    return items.filter(item => item.toLowerCase().includes(lower))
  }, [deferredQuery, items])

  const handleSelect = (item: string) => {
    setQuery(item)
    setSearchParams(prev => {
      prev.set(SEARCH_PARAMS.SEARCH, item)
      return prev
    })
    setIsOpen(false)
  }

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value)
    setIsOpen(true)
  }

  const highlightMatch = (item: string) => {
    const i = item.toLowerCase().indexOf(query.toLowerCase())
    if (i === -1 || !query) return item
    return (
      <>
        {item.slice(0, i)}
        <span className="text-accent dark:text-accent-dark bg-muted dark:bg-muted-dark font-semibold">
          {item.slice(i, i + query.length)}
        </span>
        {item.slice(i + query.length)}
      </>
    )
  }

  const onFocus = () => {
    setIsOpen(true)
  }

  const onClear = () => {
    setQuery('')
    setSearchParams(prev => {
      prev.set(SEARCH_PARAMS.SEARCH, '')
      return prev
    })
  }

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (!filtered.length) return

    if (e.key === KEY_BOARDS.ArrowDown) {
      e.preventDefault()
      setActiveIndex(prev => (prev + 1) % filtered.length)
    } else if (e.key === KEY_BOARDS.ArrowUp) {
      e.preventDefault()
      setActiveIndex(prev => (prev - 1 + filtered.length) % filtered.length)
    } else if (e.key === KEY_BOARDS.Enter) {
      e.preventDefault()
      handleSelect(filtered[activeIndex])
    } else if (e.key === KEY_BOARDS.Escape) {
      setIsOpen(false)
    }
  }

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        wrapperRef.current &&
        !wrapperRef.current.contains(e.target as Node)
      ) {
        setIsOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  useEffect(() => {
    if (!listRef.current) return
    const el = listRef.current.children[activeIndex] as HTMLElement
    if (el) {
      el.scrollIntoView({ block: 'nearest' })
    }
  }, [activeIndex])

  useEffect(() => {
    setActiveIndex(0)
  }, [filtered])

  useEffect(() => {
    setSearchParams(prev => {
      prev.set(SEARCH_PARAMS.SEARCH, query)
      return prev
    })
    // console.log(deferredQuery)
  }, [query, setSearchParams])

  return {
    activeIndex,
    filtered,
    handleKeyDown,
    handleSelect,
    highlightMatch,
    listRef,
    isOpen,
    onChange,
    onClear,
    onFocus,
    query,
    wrapperRef
  }
}
