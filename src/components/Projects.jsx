'use client'
import { useState, useRef, useEffect } from 'react'
import Heading from './sub/Heading'
import Project from './sub/Project'
import { projectsData, projectsButton } from '@/assets'
import { animate, motion } from 'framer-motion'

const Projects = () => {
  const [tech, setTech] = useState('All')
  const [index, setIndex] = useState(0)
  const prevIndex = useRef(0)
  const buttonsRef = useRef([])

  const handleClick = () => {
    animate(buttonsRef.current[prevIndex.current], { opacity: 0.5, scale: 1 })
    animate(buttonsRef.current[index], { opacity: 1, scale: 1.2 })
  }

  useEffect(() => {
    handleClick()
    prevIndex.current = index
  }, [index])

  return (
    <div id="projects" className="min-h-screen py-20">
      <Heading text={'Projects'} />

      {/* Filter Buttons */}
      <div className="flex flex-wrap items-center justify-center gap-4 py-10">
        {projectsButton.map((text, i) => (
          <motion.button
            key={i}
            initial={{ opacity: i === 0 ? 1 : 0.5, scale: i === 0 ? 1.2 : 1 }}
            ref={(el) => (buttonsRef.current[i] = el)}
            onClick={() => {
              setTech(text)
              setIndex(i)
            }}
            className="border border-yellow-500 rounded-xl px-3 py-1 text-sm font-light tracking-wider text-gray-400 hover:text-yellow-400 transition"
          >
            {text}
          </motion.button>
        ))}
      </div>

      {/* Projects Grid */}
      <div className="flex flex-wrap items-center justify-center gap-6">
        {projectsData
          .filter((project) =>
            project.tech.some((item) => (tech === 'All' ? true : item === tech))
          )
          .map((data, i) => (
            <motion.div key={`id-${i}`} layout className="max-w-sm w-full">
              <div className="bg-gray-900 rounded-2xl shadow-lg overflow-hidden hover:scale-105 transition-transform duration-300">
                <img
                  src={data.url}
                  alt={data.name}
                  className="w-full h-56 object-cover"
                />
                <div className="p-5 flex flex-col gap-3">
                  <h3 className="text-lg font-semibold text-white">{data.name}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{data.desc}</p>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {data.tech.map((tech, idx) => (
                      <span
                        key={idx}
                        className="text-xs bg-yellow-500/20 text-yellow-400 px-2 py-1 rounded-lg"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* ✅ GitHub Repository Button */}
                  {data.repo && (
                    <a
                      href={data.repo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-4 inline-block text-center text-sm bg-yellow-500 hover:bg-yellow-600 text-black font-medium py-2 px-4 rounded-xl transition"
                    >
                      View Code
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
      </div>
    </div>
  )
}

export default Projects
