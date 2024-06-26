import React from 'react'

import { LuList } from 'react-icons/lu'

import SessionsFilter from '@/components/sessions/sessions-filter'
import SessionsList from '@/components/sessions/sessions-list'

export default function MeditationsPage() {
    return (
        <React.Fragment>
            <header className="
                pt-2 pb-4 flex items-center justify-between
                border-b-2 border-stone-200 dark:border-stone-700
                transition-colors">
                <div className="flex gap-2 items-center">
                    <LuList className="text-3xl text-blue-500" />

                    <strong className="text-2xl text-stone-800 dark:text-stone-100 font-bold transition-colors">
                        Lista de sessões concluídas
                    </strong>
                </div>

                <SessionsFilter />
            </header>

            <SessionsList />
        </React.Fragment>
    )
}