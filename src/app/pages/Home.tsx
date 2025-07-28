import { RequestInfo } from 'rwsdk/worker'
import { ClientComponentTest } from './ClientComponentTest'

const data = [
  {
    name: 'Artificial Intelligence',
    href: '/ai/',
    groups: [
      {
        name: 'AI Content Creation',
        href: '/ai/ai-content-creation/'
      },
      {
        name: 'AI Automation',
        href: '/ai/ai-automation/'
      },
      {
        name: 'Adobe AI',
        href: '/ai/adobe-ai/'
      },
      {
        name: 'Avid AI',
        href: '/avid/media-composer/phrasefind-ai-and-script-sync-ai-options-in-avid-media-composer-2024-10'
      }
    ]
  },
  {
    name: 'Adobe',
    href: '/adobe/',
    groups: [
      {
        name: 'Adobe Acrobat',
        href: '/adobe/acrobat/'
      },
      {
        name: 'Adobe After Effects',
        href: '/adobe/after-effects/'
      },
      {
        name: 'Adobe Animate CC',
        href: '/adobe/animate-cc'
      },
      {
        name: 'Adobe Audition',
        href: '/adobe/audition'
      },
      {
        name: 'Adobe Captivate',
        href: '/adobe/captivate/'
      },
      {
        name: 'Adobe ColdFusion',
        href: '/adobe/coldfusion/'
      },
      {
        name: 'Adobe Dreamweaver',
        href: '/adobe/dreamweaver/'
      },
      {
        name: 'Adobe Illustrator',
        href: '/adobe/illustrator/'
      },
      {
        name: 'Adobe InDesign',
        href: '/adobe/indesign/'
      },
      {
        name: 'Adobe Photoshop',
        href: '/adobe/photoshop/'
      },
      {
        name: 'Adobe Premiere Pro',
        href: '/adobe/premiere-pro/'
      }
    ]
  },
  {
    name: 'Apple',
    href: '/apple/',
    groups: [
      {
        name: 'Final Cut Pro',
        href: '/apple/final-cut-pro/'
      },
      {
        name: 'Logic Pro',
        href: '/apple/logic-pro/'
      },
      {
        name: 'Motion',
        href: '/apple/motion/'
      },
      {
        name: 'Compressor',
        href: '/apple/compressor/'
      },
      {
        name: 'macOS Sequoia',
        href: '/apple/macos-sequoia/'
      },
      {
        name: 'macOS Sonoma',
        href: '/apple/macos-sonoma/'
      },
      {
        name: 'Apple Technician',
        href: '/apple/applecare-technician-training/'
      },
      {
        name: 'iOS IT Support',
        href: '/apple/ios-it-support/'
      }
    ]
  },
  {
    name: 'Autodesk',
    href: '/autodesk/',
    groups: [
      {
        name: 'Autodesk AutoCAD',
        href: '/autodesk/autocad/'
      },
      {
        name: 'Autodesk Revit Architecture',
        href: '/autodesk/revit-architecture/'
      }
    ]
  },
  {
    name: 'Avid',
    href: '/avid/',
    groups: [
      {
        name: 'Avid Media Composer',
        href: '/avid/media-composer/'
      },
      {
        name: 'Avid Pro Tools',
        href: '/avid/pro-tools/'
      }
    ]
  },
  {
    name: 'Blackmagic Design',
    href: '/blackmagic/',
    groups: [
      {
        name: 'DaVinci Resolve',
        href: '/blackmagic/davinci-resolve/'
      },
      {
        name: 'Blackmagic Design Fusion',
        href: '/blackmagic/fusion/'
      }
    ]
  },
  {
    name: 'Maxon',
    href: '/maxon/',
    groups: [
      {
        name: 'MAXON Cinema 4D',
        href: '/maxon/cinema-4d/'
      }
    ]
  },
  {
    name: 'NewTek',
    href: '/newtek/',
    groups: [
      {
        name: 'NewTek TriCaster',
        href: '/newtek/tricaster/',
        note: 'Available onsite only - Contact FMC'
      }
    ]
  },
  {
    name: 'IT Academy',
    groups: [
      {
        name: 'Amazon Web Services',
        href: '/amazon-web-services/'
      },
      {
        name: 'Microsoft',
        href: '/microsoft/'
      },
      {
        name: 'Cisco',
        href: '/cisco/'
      }
    ]
  },
  {
    name: 'Web Development',
    groups: [
      {
        name: 'HTML CSS and JavaScript',
        href: '/web-design-and-development/html-css-and-javascript/'
      },
      {
        name: 'WordPress',
        href: '/web-design-and-development/wordpress/'
      },
      {
        name: 'XML',
        href: '/web-design-and-development/xml/'
      }
    ]
  }
]

export function Home({ request }: RequestInfo) {
  const url = new URL(request.url)
  return (
    <div>
      <span style={{fontSize: '2em' }}>🕺🕺 </span>client-side nav<br />
      <a href={url.origin + url.pathname} style={{ textUnderlineOffset: 8 }}>{url.origin}{url.pathname}</a>{url.search}{url.hash}
      <h1><a href="/">Home</a></h1>
      Attempt to build a repro for jldec's{' '}
      <a href="https://github.com/fmctraining/fmc-website/issues/29">iOS Safari issue</a><br />
      Github: <a href="https://github.com/jldec/safari-issue-29">https://github.com/jldec/safari-issue-29</a><br />
      Deployed at <a href="https://safari-issue-29.jldec.workers.dev">https://safari-issue-29.jldec.workers.dev</a><br />
      Client-side nav at <a href="https://client-side-nav-safari-issue-29.jldec.workers.dev">https://client-side-nav-safari-issue-29.jldec.workers.dev</a>
      <h3>To reproduce:</h3>
      <ol>
        <li>Navigate to <a href="https://safari-issue-29.jldec.workers.dev">https://safari-issue-29.jldec.workers.dev</a>{' '}in Safari</li>
        <li>Close safari using the app switcher</li>
        <li>Wait 10 minutes</li>
        <li>Restart safari - page should re-open on the same URL. Observe flash + blank page.</li>
      </ol>
      <ClientComponentTest /> <span style={{fontSize: '2em' }}>👈 </span><i>Client component</i>
      {data.map((classData, index) => (
        <div key={index}>
          <h2>{classData.href ? <a href={classData.href}>{classData.name}</a> : classData.name}</h2>
          <ul>
            {classData.groups.map((groupData) => (
              <li key={groupData.href}>
                <a href={groupData.href}>{groupData.name}</a>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  )
}
