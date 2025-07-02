import { FLIGHTS } from '@/shared/db/fligths.data'
import { Icon, ScrollContainer } from '@/shared/ui'
import { Dropdown } from '@/shared/ui/dropdown'
import { PlaneIcon } from '@/shared/ui/icons/plane-icon'
import { cn } from '@/shared/utils'
import { useState } from 'react'
import { Link } from 'react-router-dom'

export const FlightList = () => {
	const [sortBy, setSortBy] = useState('aircraftReg')
	return (
		<>
			<ScrollContainer className="w-full md:block justify-self-stretch pt-10 relative">
				<div className="snap-start mb-4">
					<Dropdown title={`Sort by: ${sortBy}`}>
						<ul className="w-fit flex flex-col gap-1 px-4 py-2 bg-primary dark:bg-primary-dark transition-colors text-sm font-medium text-foreground dark:text-foreground-dark rounded-2xl border-foreground dark:border-foreground-dark border-2">
							<li>
								<button
									className="p-2 bg-secondary dark:bg-secondary-dark rounded w-full flex items-center justify-between gap-4"
									onClick={() => setSortBy('aircraftReg')}
								>
									aircraftReg{' '}
									<Icon
										name="checked"
										className={cn('opacity-0 transition-opacity', {
											['opacity-100']: sortBy === 'aircraftReg'
										})}
									/>
								</button>
							</li>
							<li>
								<button
									className="p-2 bg-secondary dark:bg-secondary-dark rounded w-full flex items-center justify-between gap-4"
									onClick={() => setSortBy('airline')}
								>
									airline
									<Icon
										name="checked"
										className={cn('opacity-0 transition-opacity', {
											['opacity-100']: sortBy === 'airline'
										})}
									/>
								</button>
							</li>
						</ul>
					</Dropdown>
				</div>
				<ul className="flex flex-col gap-4 w-full max-w-100 lg:w-100 h-fit mb-8">
					{FLIGHTS.sort((a, b) => a.airline.localeCompare(b.airline)).map(
						el => {
							return (
								<li key={el.airline} className="snap-start">
									<div className="w-full min-h-50 rounded-2xl focus-within:p-[2px] p-0.5 focus-within:bg-gradient-to-r focus-within:from-[#E44948] focus-within:to-[#FBA316] overflow-hidden transition-colors">
										<Link
											to={'?airline=' + el.airline}
											className="h-50 focus:outline-0 rounded-2xl flex flex-col text-foreground dark:text-foreground-dark bg-primary dark:bg-primary-dark p-4 gap-9 transition-colors"
										>
											<div className="flex items-center mb-auto">
												<div className="flex items-center gap-2 mr-auto">
													<div className="w-8 h-8 rounded-4xl border-none overflow-clip bg-white">
														<img
															className="object-cover scale-101"
															src={el.logo}
															alt={el.airline}
														/>
													</div>
													<div>{el.airline}</div>
												</div>
												<div className="rounded-xl p-1 bg-secondary dark:bg-secondary-dark mr-4">
													93247
												</div>
												<div className="rounded-xl p-1 bg-secondary dark:bg-secondary-dark">
													{el.aircraftReg}
												</div>
											</div>
											<div className="flex items-center gap-4">
												<div className="flex flex-col gap-2">
													<div className="text-base">{el.from.city}</div>
													<div className="text-5xl">{el.from.code}</div>
												</div>
												<div className="w-full h-1 rounded-2xl flex relative">
													<div className="w-1/2 h-full bg-gradient-to-r from-[#E44948] to-[#FBA316] rounded-l-2xl"></div>
													<div className="absolute -top-8 translate-y-full left-1/2 -translate-x-1/2">
														<PlaneIcon />
													</div>
													<div className="w-1/2 h-full bg-secondary dark:bg-secondary-dark rounded-r-2xl transition-colors"></div>
												</div>
												<div className="flex flex-col gap-2">
													<div className="text-base">{el.to.city}</div>
													<div className="text-5xl">{el.to.code}</div>
												</div>
											</div>
										</Link>
									</div>
								</li>
							)
						}
					)}
				</ul>
			</ScrollContainer>
		</>
	)
}
