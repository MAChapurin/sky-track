import { CUSTOM_EVENTS } from '@/shared/config'
// import { useClickOutside } from "@/shared/hooks";
import { emitter } from '@/shared/utils'
import { useEffect, useRef, useState } from 'react'
import { useLocation } from 'react-router-dom'

export const useMobileMenu = () => {
	const [isOpen, setIsOpen] = useState(false)
	const onOpen = () => {
		setIsOpen(true)
	}

	const onClose = () => {
		setIsOpen(false)
	}
	const location = useLocation().pathname
	//   const emitCloseMenu = () => {
	//     emitter.emit(CUSTOM_EVENTS.CLOSE_MENU);
	//   };

	const ref = useRef<HTMLDivElement>(null!)

	useEffect(() => {
		const unSubscribeOpen = emitter.subscribe(CUSTOM_EVENTS.OPEN_MENU, onOpen)
		const unSubscribeClose = emitter.subscribe(
			CUSTOM_EVENTS.CLOSE_MENU,
			onClose
		)
		return () => {
			unSubscribeOpen()
			unSubscribeClose()
		}
	}, [])

	useEffect(() => {
		emitter.emit(CUSTOM_EVENTS.CLOSE_MENU)
	}, [location])

	return {
		isOpen,
		ref
	}
}
