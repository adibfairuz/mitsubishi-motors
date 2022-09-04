import React, { useCallback, useEffect, useState } from 'react'
import Button from '../../components/Button';
import Card from '../../components/Card';
import Modal from '../../components/Modal';
import Select from '../../components/Select';
import style from './style.module.css';
import IconMarkerRed from '../../assets/icon-marker-red.svg';
import IconMap from '../../assets/icon-map.svg';
import IconPhone from '../../assets/icon-phone.svg';
import { getProvinces, getDealers } from '../../services';
import Spinner from '../../components/Spinner';

const Dealers = () => {
    const [isModalShowing, setIsModalShowing] = useState(false)
    const [provinces, setProvinces] = useState([])
    const [selectedLocation, setSelectedLocation] = useState('')
    const [selectedItem, setSelectedItem] = useState({})
    const [dealers, setDealers] = useState({})
    const [currentLocation, setCurrentLocation] = useState(null)
    const [isLoading, setIsLoading] = useState(false)
    const handleOpenModal = useCallback(
        (item) => {
            setSelectedItem(item)
            setIsModalShowing(true)
        },
        []
    )
    
    const handleCloseModal = useCallback(
        () => {
            setIsModalShowing(false)
        },
        []
    )

    const handleChangeLocation = async (e) => {
        const keyword = e?.target?.value
        setDealers({})
        setIsLoading(true)
        const res = await getDealers({
            page: 1,
            limit: 9,
            keyword
        })
        setIsLoading(false)
        setSelectedLocation(keyword)
        setDealers(res)
    }

    const handleLoadMore = async () => {
        setIsLoading(true)
        const res = await getDealers({
            page: dealers.current_page + 1 || 1,
            limit: 9,
            ...(selectedLocation && { keyword: selectedLocation })
        })
        setIsLoading(false)
        const tempData = [
            ...dealers.data,
            ...res.data
        ] 
        setDealers({
            ...res,
            data: tempData
        })
    }

    useEffect(() => {
        const fetchDealers = async () => {
            navigator.geolocation.getCurrentPosition(
                async ({coords}) => {
                    setIsLoading(true)
                    const res = await getDealers({
                        page: 1,
                        limit: 9,
                        latlong: `${coords.latitude},${coords.longitude}`
                    })
                    setIsLoading(false)
                    setCurrentLocation({
                        latitude: coords.latitude,
                        longitude: coords.longitude
                    })
                    setDealers(res)
                },
                async () => {
                    setIsLoading(true)
                    const res = await getDealers({
                        page: 1,
                        limit: 9
                    })
                    setIsLoading(false)
                    setDealers(res)
                }
            )
        }
        const fetchProvinces = async () => {
            try {
                const res = await getProvinces()
                setProvinces(res)
            } catch (error) {
                console.log(error);
            }
        }
        fetchProvinces()
        fetchDealers()
    }, [])

    return (
        <div className={style['dealers']}>
            <div className={style['filter']}>
                <div className={style['intro']}>
                    <h2 className={style['title']}>FIND DEALER</h2>
                    <p className={style['description']}>Cari dan kunjungi dealer resmi Mitsubishi terdekat di kota Anda untuk mendapatkan pelayanan terbaik terkait dengan kendaraan dari Mitsubishi Motors Indonesia.</p>
                </div>
                <div className={style['search']}>
                    <label className={style['label']}>Discover the nearest dealership in your area</label>
                    <Select
                        onChange={handleChangeLocation}
                        className={style['select']}
                        placeholder="Piih Lokasi Terdekat"
                        items={provinces}
                    />
                </div>
            </div>
            {
                isLoading && !dealers?.data?.length && (
                    <div className={style['spinner']}>
                        <Spinner />
                    </div>
                )
            }
            <div className={style['dealer-list']}>
                {
                    dealers?.data?.map(item => (
                        <Card key={item.id} data={item} onClick={handleOpenModal} />
                    ))
                }
            </div>
            <div className={style['load-more']}>
                {
                    dealers?.next_page_url && (
                        <Button onClick={handleLoadMore} isLoading={isLoading}>
                            LOAD MORE
                        </Button>
                    )
                }
            </div>
            <Modal show={isModalShowing} onHide={handleCloseModal}>
                <div className={style['details']}>
                    <div className={style['icon-marker']}>
                        <img src={IconMarkerRed} alt="icon-marker-red" />
                    </div>
                    <div className={style['content']}>
                        <ul className={style['services']}>
                            {
                                selectedItem?.services?.map(service => (
                                    <li key={service}>{service}</li>
                                ))
                            }
                        </ul>
                        <h4 className={style['title']}>{selectedItem?.title}</h4>
                        <p className={style['description']}>{selectedItem?.address}</p>
                        <a
                            href={
                                currentLocation
                                ?
                                `https://www.google.com/maps/dir/${currentLocation?.latitude},${currentLocation?.longitude}/${selectedItem.latitude},${selectedItem.longitude}`
                                :
                                `https://maps.google.com/maps?q=${selectedItem.latitude},${selectedItem.longitude}`} target="_blank" className={style['view-direction']
                            }
                        >
                            <img className={style['icon-map']} src={IconMap} alt="icon-map" />
                            <span className={style['text']}>VIEW DIRECTION</span>
                        </a>
                        <div className={style['actions']}>
                            <Button className={style['button-1']}>REQUEST TEST DRIVE</Button>
                            <Button className={style['button-2']} variant="white">BOOK SERVICE</Button>
                        </div>
                        <div className={style['sb']}>
                            <div className={style['showroom']}>
                                <h5 className={style['title']}>
                                    Showroom
                                </h5>
                                {
                                    selectedItem?.showroom_operational_hours?.map((item, i) => (
                                        <div key={item.days + i} className={style['date-time']}>
                                            <div className={style['date']}>
                                                {item.days}
                                            </div>
                                            <div className={style['time']}>
                                                {item.hours}
                                            </div>
                                        </div>
                                    ))
                                }
                            </div>
                            <div className={style['bengkel']}>
                                <h5 className={style['title']}>
                                    Bengkel
                                </h5>
                                {
                                    selectedItem?.bengkel_operational_hours?.map((item, i) => (
                                        <div key={item.days + i} className={style['date-time']}>
                                            <div className={style['date']}>
                                                {item.days}
                                            </div>
                                            <div className={style['time']}>
                                                {item.hours}
                                            </div>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                        <div className={style['contact']}>
                            <h5 className={style['title']}>
                                Contact
                            </h5>
                            {
                                selectedItem?.phone ? (
                                    <div className={style['phone']}>
                                        <img className={style['icon-phone']} src={IconPhone} alt="icon-phone" />
                                        <span className={style['text']}>
                                            {selectedItem?.phone}
                                        </span>
                                    </div>
                                )
                                : '-'
                            }
                        </div>
                    </div>
                </div>
            </Modal>
        </div>
    )
}

export default Dealers