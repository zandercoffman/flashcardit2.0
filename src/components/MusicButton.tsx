"use client"

import { useState, useEffect, useRef } from "react"
import { Button } from "./ui/button"
import { Music } from "lucide-react"
import { motion } from "framer-motion"
import { ScrollArea } from "./ui/scroll-area"

export interface Video {
    title: string
    channel: string
    link: string
    pfp: string
}

const lofiGirlVideos: Video[] = [
    {
        title: "1 A.M Study Session 📚 [lofi hip hop]",
        channel: "Lofi Girl",
        link: "https://www.youtube.com/watch?v=lTRiuFIWV54",
        pfp: "https://yt3.ggpht.com/7rkXK4g4Lbpetl0Bz9Wd35Y-p2bPTttMn_K4seCE2JmmXPrqOSd8atpeTbLSyo1sIrlSqB-xbg=s48-c-k-c0x00ffffff-no-rj",
    },
    {
        title: "lofi hip hop radio 📚 beats to relax/study to",
        channel: "Lofi Girl",
        link: "https://www.youtube.com/watch?v=jfKfPfyJRdk",
        pfp: "https://yt3.ggpht.com/7rkXK4g4Lbpetl0Bz9Wd35Y-p2bPTttMn_K4seCE2JmmXPrqOSd8atpeTbLSyo1sIrlSqB-xbg=s48-c-k-c0x00ffffff-no-rj",
    },
    {
        title: "2 A.M Study Session 📚 [lofi hip hop]",
        channel: "Lofi Girl",
        link: "https://www.youtube.com/watch?v=wAPCSnAhhC8",
        pfp: "https://yt3.ggpht.com/7rkXK4g4Lbpetl0Bz9Wd35Y-p2bPTttMn_K4seCE2JmmXPrqOSd8atpeTbLSyo1sIrlSqB-xbg=s48-c-k-c0x00ffffff-no-rj",
    },
    {
        title: "Lofi Girl - Christmas 2025 🎄",
        channel: "Lofi Girl",
        link: "https://www.youtube.com/watch?v=7O9jGGm7PlE",
        pfp: "https://yt3.ggpht.com/7rkXK4g4Lbpetl0Bz9Wd35Y-p2bPTttMn_K4seCE2JmmXPrqOSd8atpeTbLSyo1sIrlSqB-xbg=s48-c-k-c0x00ffffff-no-rj",
    },
    {
        title: "Best of lofi hip hop 2021 ✨ [beats to relax/study to]",
        channel: "Lofi Girl",
        link: "https://www.youtube.com/watch?v=n61ULEU7CO0",
        pfp: "https://yt3.ggpht.com/7rkXK4g4Lbpetl0Bz9Wd35Y-p2bPTttMn_K4seCE2JmmXPrqOSd8atpeTbLSyo1sIrlSqB-xbg=s48-c-k-c0x00ffffff-no-rj",
    },
    {
        title: "back to school 📚 [lofi hip hop]",
        channel: "Lofi Girl",
        link: "https://www.youtube.com/watch?v=qEN5ZHDi1Kg",
        pfp: "https://yt3.ggpht.com/7rkXK4g4Lbpetl0Bz9Wd35Y-p2bPTttMn_K4seCE2JmmXPrqOSd8atpeTbLSyo1sIrlSqB-xbg=s48-c-k-c0x00ffffff-no-rj",
    },
    {
        title: "1 P.M Study Session 🎹 [calm piano]",
        channel: "Lofi Girl",
        link: "https://www.youtube.com/watch?v=VDtjKuS2R3E",
        pfp: "https://yt3.ggpht.com/7rkXK4g4Lbpetl0Bz9Wd35Y-p2bPTttMn_K4seCE2JmmXPrqOSd8atpeTbLSyo1sIrlSqB-xbg=s48-c-k-c0x00ffffff-no-rj",
    },
]

const ssfVideos: Video[] = [
    {
        title: "Intense Study - 40Hz Gamma Binaural Beats to Increase Productivity and Focus",
        channel: "Study Sonic Focus",
        link: "https://www.youtube.com/watch?v=lkkGlVWvkLk",
        pfp: "https://yt3.ggpht.com/AC0Z2OAbC31TwWQeGLnz4p8tn1HmKIbezG7hAU9Wya5rhpavrk8Nm3638tV0VQMtHQuSWHJKtt8=s48-c-k-c0x00ffffff-no-rj",
    },
    {
        title: "Exam Study Music - 40Hz Gamma Binaural Beats, Brainwave Music for Improved Memory",
        channel: "Study Sonic Focus",
        link: "https://www.youtube.com/watch?v=qQzf-xzZO7M",
        pfp: "https://yt3.ggpht.com/AC0Z2OAbC31TwWQeGLnz4p8tn1HmKIbezG7hAU9Wya5rhpavrk8Nm3638tV0VQMtHQuSWHJKtt8=s48-c-k-c0x00ffffff-no-rj",
    },
]

const studyWithMeVideos: Video[] = [
    {
        title: "midnight library study w me @ yale | irving s. gilmore library, 20/5 pomodoro, asmr sounds + lofi",
        channel: "millie liao",
        link: "https://www.youtube.com/watch?v=h_VnkbsCzZ0",
        pfp: "https://yt3.ggpht.com/eyGiuVS9OXhyhQOqnBCZZsOwGNrn09AnsHImlNA3Q0KpNfH5LpOGNy_L8H3a1nvzFjqWuHsJug=s48-c-k-c0x00ffffff-no-rj",
    },
    {
        title: "studying congenital heart diseases 🫀 | 2hr swm, piano bgm, timer",
        channel: "Phương học đi",
        link: "https://www.youtube.com/watch?v=FxsevJUKcDU",
        pfp: "https://yt3.ggpht.com/5clR7kbIIkzmiXvSWaKvkwv1FrTA2HmIN6Qy-NyUqPakuJEI0t9vChjVV1c7CSTRL6vI2MPPFQ=s48-c-k-c0x00ffffff-no-rj",
    },
    {
        title: "🌧️ 3-HOUR STUDY WITH ME on a RAINY NIGHT | Pomodoro 50-10 | Rain Sounds | No Music [ambient ver.]",
        channel: "Celine",
        link: "https://www.youtube.com/watch?v=0Xn1GlzdSDs",
        pfp: "https://yt3.ggpht.com/gKKJSVEPjM1SR1omewAxGG2mE31zsosrjg_B57jMzQV3pgASju8XukdfgPERVHexoGp5dTGWvA=s48-c-k-c0x00ffffff-no-rj",
    },
    {
        title: "Study with Korean law student for 2 hours! [Study with me]",
        channel: "Spring of Yoo",
        link: "https://www.youtube.com/watch?v=ms-Tr0GbVAY",
        pfp: "https://yt3.ggpht.com/gZywJQKgaH2uNr2xdlQgfMU1IlVRQNi3idRXxhOjTHIBqxbw-sXm5ulbVKb35gZZIxq4dZbe=s48-c-k-c0x00ffffff-no-rj",
    },
    {
        title: "🌇 1-HOUR STUDY WITH ME | Late Afternoon, Peaceful Acoustic Guitar BGM | Pomodoro (25/5)",
        channel: "The Hanoi Chamomile",
        link: "https://www.youtube.com/watch?v=SQ93oOmVxHs",
        pfp: "https://yt3.ggpht.com/kXh7Kk9kpJp5qTi7-6JtXnmnXQU0fE4xKSO280eurpufqLACU35MvWACYY2UJrm-bHI8XxIIZ3A=s48-c-k-c0x00ffffff-no-rj",
    },
    {
        title: "QUICK 30 MIN STUDY WITH ME and the clouds☁️Calm Piano 🎹 or how to overcome procrastination",
        channel: "Nui's Corner",
        link: "https://www.youtube.com/watch?v=yE5IVtxTyDs",
        pfp: "https://yt3.ggpht.com/GYkY_MPJdqnkNERmdcRFfQ0PYGktK_jTnp5mbZmTmtZXBpRb-MiwWh6NH47fFkSgvvkvi4ya=s48-c-k-c0x00ffffff-no-rj",
    },
    {
        title: "3-HOUR STUDY WITH ME in Lijiang, China [25/5] 🐦 River & Birds Sound⏰ Pomodoro timer",
        channel: "Nui's Corner",
        link: "https://www.youtube.com/watch?v=IKn7gkVu2XM",
        pfp: "https://yt3.ggpht.com/GYkY_MPJdqnkNERmdcRFfQ0PYGktK_jTnp5mbZmTmtZXBpRb-MiwWh6NH47fFkSgvvkvi4ya=s48-c-k-c0x00ffffff-no-rj",
    },
    {
        title: "3 HOURS STUDY WITH ME 🎹 Relaxing Piano ⏰ 25/5 Pomodoro",
        channel: "Nui's Corner",
        link: "https://www.youtube.com/watch?v=Nvc4qJMqz88",
        pfp: "https://yt3.ggpht.com/GYkY_MPJdqnkNERmdcRFfQ0PYGktK_jTnp5mbZmTmtZXBpRb-MiwWh6NH47fFkSgvvkvi4ya=s48-c-k-c0x00ffffff-no-rj",
    },
]

const timelofi: Video[] = [
    {
        title: "Cowboy Chill – Western Lofi Beats to Ride & Relax To",
        channel: "Lofi Focus Lounge",
        link: "https://www.youtube.com/watch?v=MEcRLl_vuow",
        pfp: "https://yt3.ggpht.com/dA3L8Xa1-t4RA6CD3UUk8kBg0LSvBE5jS7x7nFmO5wOUqIOFVtY-7Ts8wKTuOvM33wcaVKw8OQ=s48-c-k-c0x00ffffff-no-rj",
    },
]

const christianlofi: Video[] = [
    {
        title: "Calm Your Soul: Good Shepherd 🐑 [Instrumental Lofi Worship Music]",
        channel: "The Lofi Christian",
        link: "https://www.youtube.com/watch?v=pWi3dW9qdQo",
        pfp: "https://yt3.ggpht.com/wSRUh2nyA-RLIY913eX4yoNNsutz5WDx0cp-_QyXr89ZmMAQRmkIV6r8fZvyaUB1ZchxKd2scg=s48-c-k-c0x00ffffff-no-rj",
    },
    {
        title: "Best of Christian Lofi 🙏🏽 [chill instrumental worship] 🙏🏻",
        channel: "The Lofi Christian",
        link: "https://www.youtube.com/watch?v=yaTEX4bXiZc",
        pfp: "https://yt3.ggpht.com/wSRUh2nyA-RLIY913eX4yoNNsutz5WDx0cp-_QyXr89ZmMAQRmkIV6r8fZvyaUB1ZchxKd2scg=s48-c-k-c0x00ffffff-no-rj",
    },
    {
        title: "BEAUTITUDES 🎚️ Sermon on the Mount Instrumental Worship",
        channel: "The Lofi Christian",
        link: "https://www.youtube.com/watch?v=pbHpxJ-nSZ8",
        pfp: "https://yt3.ggpht.com/wSRUh2nyA-RLIY913eX4yoNNsutz5WDx0cp-_QyXr89ZmMAQRmkIV6r8fZvyaUB1ZchxKd2scg=s48-c-k-c0x00ffffff-no-rj",
    },
    {
        title: "Alone With God ⛰️ (Christian Instrumental Worship Music)",
        channel: "The Lofi Christian",
        link: "https://www.youtube.com/watch?v=BtWuAGcx-nI",
        pfp: "https://yt3.ggpht.com/wSRUh2nyA-RLIY913eX4yoNNsutz5WDx0cp-_QyXr89ZmMAQRmkIV6r8fZvyaUB1ZchxKd2scg=s48-c-k-c0x00ffffff-no-rj",
    },
]

const poplofi: Video[] = [
    {
        title: "sabrina carpenter's greatest hits, but lofi | 2 hour instrumental mix",
        channel: "louisette",
        link: "https://www.youtube.com/watch?v=0bETw-PdYlM",
        pfp: "https://yt3.ggpht.com/EAPoBXAUTlts_ohyZ1LH5LSoJb3X7oJ7iMyNnO0g3zXl54dPSEnC3i85B27mA87oz8Rm-tK3hA=s48-c-k-c0x00ffffff-no-rj",
    },
]


export const defaultVideos: Video[] = [
    ...lofiGirlVideos,
    ...ssfVideos,
    ...studyWithMeVideos,
    ...christianlofi,
    ...timelofi,
    ...poplofi,
]

export default function MusicButton({
    setCurrentVideo
}: {
    setCurrentVideo: (video: Video | null) => void
}) {
    const [link, setLink] = useState(defaultVideos[0].link)
    const [videoId, setVideoId] = useState<string>("")
    const [open, setOpen] = useState(false)
    const [hovered, setHovered] = useState(false)
    const [showCurrentInMenu, setShowCurrentInMenu] = useState(false)
    const [customLink, setCustomLink] = useState("")
    const [studyWithMe, setStudyWithMe] = useState(false)
    const [swmPosition, setSwmPosition] = useState<"top-left" | "top-right" | "bottom-left" | "bottom-right">("bottom-right")

    const cardRef = useRef<HTMLDivElement>(null)
    const buttonRef = useRef<HTMLButtonElement>(null)
    const [videos, setVideos] = useState(defaultVideos)
    const [hasOpened, setHasOpened] = useState<boolean>(false);

    const getRandomVideos = (arr: typeof defaultVideos, count: number) => {
        const shuffled = [...arr].sort(() => 0.5 - Math.random())
        return shuffled.slice(0, count)
    }

    const randomVideos = getRandomVideos(defaultVideos, 3)

    // Extract video ID
    useEffect(() => {
        try {
            const url = new URL(link)
            const id = url.searchParams.get("v")
            if (id) setVideoId(id)
        } catch {
            console.error("Invalid YouTube URL")
        }
    }, [link])

    // Click outside to close
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (
                cardRef.current &&
                !cardRef.current.contains(event.target as Node) &&
                buttonRef.current &&
                !buttonRef.current.contains(event.target as Node)
            ) {
                setOpen(false)
            }
        }

        document.addEventListener("mousedown", handleClickOutside)
        return () => document.removeEventListener("mousedown", handleClickOutside)
    }, [])

    const getYouTubeThumbnail = (link: string) => {
        try {
            const url = new URL(link)
            const id = url.searchParams.get("v")
            return id ? `https://img.youtube.com/vi/${id}/hqdefault.jpg` : ""
        } catch {
            return ""
        }
    }

    const selectedVideo = videos.find(v => v.link === link)

    useEffect(() => {
        if (showCurrentInMenu && selectedVideo) {
            setCurrentVideo(selectedVideo)
        } else {
            setCurrentVideo(null)
        }
    }, [showCurrentInMenu, selectedVideo])

    // Helper for Study With Me embed position
    const getSwmStyle = () => {
        switch (swmPosition) {
            case "top-left": return { top: "10px", left: "10px" }
            case "top-right": return { top: "10px", right: "10px" }
            case "bottom-left": return { bottom: "10px", left: "10px" }
            case "bottom-right": return { bottom: "10px", right: "10px" }
        }
    }


    return (
        <div className="relative inline-block">
            {/* Animated Button */}
            <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }} className="inline-block">
                <Button
                    ref={buttonRef}
                    variant="ghost"
                    className="p-2 w-8 lg:w-8 h-6 lg:h-8"
                    onClick={() => {
                        setOpen(!open)
                        if (!hasOpened)
                            setHasOpened(true)
                    }}
                    onMouseEnter={() => setHovered(true)}
                    onMouseLeave={() => setHovered(false)}
                >
                    <Music className="size-4 lg:size-6" />
                    {hasOpened && <span className="absolute inline-flex right-0 top-0 size-1 rounded-full bg-sky-400 opacity-75"></span>}
                </Button>
            </motion.div>

            {/* Main card */}
            <motion.div
                ref={cardRef}
                initial={{ opacity: 0, scale: 0.5, y: 1 }}
                animate={{ opacity: open ? 1 : 0, scale: open ? 1 : 0.5, y: open ? 8 : 20 }}
                transition={{ type: "spring", stiffness: 300, damping: 25 }}
                style={{ visibility: open ? "visible" : "hidden", width: "860px", height: "460px" }}
                className="absolute top-full mt-2 left-0 px-6 bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-3 shadow-sm z-[50] origin-top-left"
            >
                <div className="relative w-full h-full flex flex-row gap-6">
                    {/* Left: main video */}
                    <div className="w-[420px] h-full flex flex-col gap-2">
                        <iframe
                            width="400"
                            height="250"
                            src={`https://www.youtube.com/embed/${videoId}`}
                            title="YouTube Video"
                            allow="autoplay; encrypted-media"
                            className="rounded-md"
                        />
                        <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
                            Currently Playing
                        </h3>
                        <p className="text-sm text-muted-foreground">{selectedVideo?.title}</p>

                        {/* Checkbox to show/hide in menu */}
                        <div className="flex items-center gap-2 mt-2">
                            <input
                                type="checkbox"
                                checked={showCurrentInMenu}
                                onChange={() => setShowCurrentInMenu(prev => !prev)}
                            />
                            <label className="text-sm">Show in menu</label>
                        </div>

                        {/* Custom link input */}
                        <div className="mt-2">
                            <input
                                type="text"
                                value={customLink}
                                placeholder="Enter custom YouTube link"
                                onChange={(e) => setCustomLink(e.target.value)}
                                className="border rounded-md p-1 w-full text-sm"
                            />
                            <Button
                                variant="outline"
                                className="mt-1 w-full"
                                onClick={() => {
                                    if (customLink) setLink(customLink)
                                }}
                            >
                                Play Custom Link
                            </Button>
                        </div>

                        {/* Study With Me */}
                        <div className="mt-4 flex flex-col gap-2">
                            <div className="flex items-center gap-2">
                                <input
                                    type="checkbox"
                                    checked={studyWithMe}
                                    onChange={() => setStudyWithMe(prev => !prev)}
                                />
                                <label className="text-sm font-semibold">Study With Me</label>
                            </div>

                            {studyWithMe && (
                                <div className="flex gap-2 mt-1">
                                    {["top-left", "top-right", "bottom-left", "bottom-right"].map(pos => (
                                        <button
                                            key={pos}
                                            className={`border px-2 py-1 text-xs rounded ${swmPosition === pos ? "bg-sky-400 text-white" : "bg-card"}`}
                                            onClick={() => setSwmPosition(pos as any)}
                                        >
                                            {pos.replace("-", " ")}
                                        </button>
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Right: video list */}
                    <ScrollArea className="flex w-full flex-col gap-2 h-[430px] overflow-y-auto">
                        {videos.map((video, idx) => (
                            <motion.div
                                key={idx}
                                className="flex flex-row items-center gap-2 p-2 rounded-md cursor-pointer"
                                onClick={() => setLink(video.link)}
                                whileHover={{ scale: 1.03 }}
                                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                            >
                                <img
                                    src={getYouTubeThumbnail(video.link)}
                                    alt={video.title}
                                    className="w-20 h-12 rounded-md object-cover"
                                />
                                <div className="flex flex-col gap-1 overflow-hidden flex-1">
                                    <span className="font-semibold truncate">{video.title}</span>
                                    <div className="flex items-center gap-1">
                                        <img src={video.pfp} alt={video.channel} className="w-5 h-5 rounded-full" />
                                        <span className="text-xs truncate">{video.channel}</span>
                                    </div>
                                </div>
                            </motion.div>
                        ))}

                        {showCurrentInMenu && selectedVideo && !videos.includes(selectedVideo) && (
                            <motion.div
                                className="flex flex-row items-center gap-2 p-2 rounded-md cursor-pointer bg-gray-100"
                                onClick={() => setLink(selectedVideo.link)}
                                whileHover={{ scale: 1.03 }}
                                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                            >
                                <img
                                    src={getYouTubeThumbnail(selectedVideo.link)}
                                    alt={selectedVideo.title}
                                    className="w-20 h-12 rounded-md object-cover"
                                />
                                <div className="flex flex-col gap-1 overflow-hidden flex-1">
                                    <span className="font-semibold truncate">{selectedVideo.title}</span>
                                    <div className="flex items-center gap-1">
                                        <img src={selectedVideo.pfp} alt={selectedVideo.channel} className="w-5 h-5 rounded-full" />
                                        <span className="text-xs truncate">{selectedVideo.channel}</span>
                                    </div>
                                </div>
                            </motion.div>
                        )}
                    </ScrollArea>
                </div>
            </motion.div>

            {/* Study With Me Embed */}
            {studyWithMe && (
                <iframe
                    width="320"
                    height="180"
                    src={`https://www.youtube.com/embed/${videoId}`}
                    title="Study With Me"
                    allow="autoplay; encrypted-media"
                    className="fixed rounded-md shadow-lg z-[60]"
                    style={{ ...getSwmStyle() }}
                />
            )}

            {/* Hover overlay */}
            {hovered && !open && (
                <motion.div
                    initial={{ opacity: 0, scale: 0.5, y: 1 }}
                    animate={{ opacity: 1, scale: 1, y: 8 }}
                    transition={{ type: "spring", stiffness: 300, damping: 25 }}
                    className="absolute flex flex-col gap-2 top-full mt-2 left-0 w-[400px] p-4 bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-3 shadow-sm z-[50] origin-top-left"
                >
                    {
                        (studyWithMe && !selectedVideo) && <div className="flex flex-col gap-2">
                            <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
                                Currently Studying With Me...
                            </h3>
                            <motion.div
                                className="flex flex-row items-center gap-2 "
                                whileHover={{ scale: 1.03 }}
                                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                            >
                                <img
                                    src={getYouTubeThumbnail(customLink)}
                                    className="w-20 h-12 rounded-md object-cover"
                                />
                                <h3 className="scroll-m-20 text-lg  tracking-tight">
                                    Custom Video
                                </h3>
                            </motion.div>
                        </div>
                    }
                    {selectedVideo && <div className="flex flex-col gap-2">
                        <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
                            Currently Playing...
                        </h3>
                        <motion.div
                            className="flex flex-row items-center gap-2 "
                            onClick={() => setLink(selectedVideo.link)}
                            whileHover={{ scale: 1.03 }}
                            transition={{ type: "spring", stiffness: 300, damping: 20 }}
                        >
                            <img
                                src={getYouTubeThumbnail(selectedVideo.link)}
                                alt={selectedVideo.title}
                                className="w-20 h-12 rounded-md object-cover"
                            />
                            <div className="flex flex-col gap-1 overflow-hidden flex-1">
                                <span className="font-semibold truncate">{selectedVideo.title}</span>
                                <div className="flex items-center gap-1">
                                    <img src={selectedVideo.pfp} alt={selectedVideo.channel} className="w-5 h-5 rounded-full" />
                                    <span className="text-xs truncate">{selectedVideo.channel}</span>
                                </div>
                            </div>
                        </motion.div>
                    </div>}
                </motion.div>
            )}
        </div>
    )
}
