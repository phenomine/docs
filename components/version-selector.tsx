import { useState } from 'react'
import versions from '../versions.json'

function VersionSelector() {
  const [selectedVersion, setSelectedVersion] = useState(0)

  function handleChange(version: any) {
    setSelectedVersion(version)
  }

  return (
    <div>
      <select value={selectedVersion} onChange={e => handleChange(e.target.value)}>
        {/* {versions.map((version, index) => (
          <option key={index} value={index}>
            {version}
          </option>
        ))} */}
        <option value="ok">OK</option>
      </select>
    </div>
  )
}

export default VersionSelector