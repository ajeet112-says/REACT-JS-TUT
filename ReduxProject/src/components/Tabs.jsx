import { useDispatch, useSelector } from 'react-redux'
import { setActiveTabs } from '../redux/features/searchSlice'

function Tabs() {
    const tabs = ["photos", "videos", "gif"]

    const dispatch = useDispatch()

    const activeTab = useSelector((state) =>
        state.search.activeTab
    )

    return (
        <div className='flex items-center gap-5 justify-center mt-3 mb-2'>

            {tabs.map((elem, idx) => {

                return (
                    <button
                        key={idx}
                        className={`${activeTab == elem
                            ? "bg-blue-700 "
                            : "bg-gray-600"
                        } cursor-pointer active:scale-95 px-4 py-2`}

                        onClick={() => {
                            dispatch(setActiveTabs(elem))
                        }}
                    >
                        {elem.charAt(0).toUpperCase() + elem.slice(1)}
                    </button>
                )

            })}

        </div>
    )
}

export default Tabs