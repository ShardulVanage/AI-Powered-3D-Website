import { motion, AnimatePresence } from 'framer-motion';
import { useSnapshot } from 'valtio';
import state from '../store';
import { CustomButton } from "../components"
import {
    headContainerAnimation,
    headContentAnimation,
    headTextAnimation,
    slideAnimation
} from '../config/motion';


const Home = () => {
    const snap = useSnapshot(state)
    return (
        <AnimatePresence>
            {snap.intro && (
                <motion.section className="home" {...slideAnimation('left')}>
                    <motion.header {...slideAnimation("down")}>
                        <img
                            src='./threejs1.png'
                            alt="logo"
                            className="w-8 h-8 object-contain"
                        />
                    </motion.header>

                    <motion.div className="home-content" {...headContainerAnimation}>
                        <motion.div {...headTextAnimation}>
                            <h1 className="head-text">
                                FEELS <br className="xl:block hidden" /> GOOD MAN.
                            </h1>
                        </motion.div>
                        <motion.div
                            {...headContentAnimation}
                            className="flex flex-col gap-5 "
                        >
                            <div className='backdrop-blur-sm bg-white/10 rounded-lg'>
                                <p className="max-w-3xl font-normal text-gray-900 text-base p-2">

                                    Ignite your style with the playful essence of Peep the Frog. Step into a world of whimsical fashion and make a bold statement.
                                    Unleash your creativity and design a one-of-a-kind shirt using our cutting-edge 3D customization tool.
                                    Embrace the fun-loving spirit of Peep and let your fashion speak volumes. Create your unique masterpiece today and become a part of the Peep revolution!
                                </p>
                            </div>

                            <CustomButton
                                type="filled"
                                title="Customize It"
                                handleClick={() => state.intro = false}
                                customStyles="w-fit px-4 py-2.5 font-bold text-sm"
                            />
                        </motion.div>
                    </motion.div>
                </motion.section>
            )}
        </AnimatePresence>
    )
}

export default Home 