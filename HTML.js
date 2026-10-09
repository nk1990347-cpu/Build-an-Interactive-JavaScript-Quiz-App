// ====================================================================================================================================================================================================================================================================================================================================================================================================================================================================================================================
// --- : PYTHON MODE UTILITIES : ---
// ====================================================================================================================================================================================================================================================================================================================================================================================================================================================================================================================

class Helper{
    static imageExists(url) { // Helper For SetBG ImageFounder
        return new Promise(resolve => {
            const img = new Image();
            img.onload = () => resolve(true);
            img.onerror = () => resolve(false);
            img.src = url;
    });
}
}

export function print(x) {
    console.log(x);
}

// time.sleep() => USAGE

//import { time } from "./HTML.js";

// --- STYLE A: Anonymous Arrow Function Loop ---
// Works perfectly! Code executes exactly 10 seconds later.

// time.sleep(10, () => {
//     console.log("Running a custom function workflow block!");
//     Toast("Moving to next round", "success");
// });


// --- STYLE B: Direct Function Reference (No Parameters) ---
// If your CHANGE function doesn't require parameters inside its setup,
// pass just its name WITHOUT "()". It will delay for 5 seconds perfectly!

// time.sleep(5, CHANGE); 


// --- STYLE C: Function with Parameters ---
// If your CHANGE function requires an argument (like your previous CHANGE_OPTIONS(2)),
// you MUST use a quick arrow wrapper to prevent it from firing early.

// time.sleep(5, () => CHANGE_OPTIONS(2));

export class time {
    /**
     * Smart Sleep Utility
     * Handles: 
     * 1. time.sleep(5, () => { someFunction() }) -> Arrow/Anonymous callbacks
     * 2. time.sleep(5, CHANGE)                  -> Direct function references
     * @param {number} seconds - Duration to wait
     * @param {Function} callback - The code to execute after the delay
     */
    static sleep(seconds, callback) {
        // 1. Safety Check: If a valid function wrapper is passed, run it via setTimeout
        if (typeof callback === "function") {
            setTimeout(callback, seconds * 1000);
        } else {
            // 2. Troubleshooting Fallback Rule:
            // If the user called CHANGE() with execution parentheses inside the argument list,
            // JavaScript already executed it instantly. We throw an elegant console alert to guide you.
            console.warn(
                `⚠️ [time.sleep] You passed an executed function or an invalid callback type ("${typeof callback}"). ` +
                `To delay execution properly without an arrow wrapper, write "time.sleep(seconds, CHANGE)" without the trailing "()".`
            );
        }
    }
}

// A reusable transition utility helper function
// Upgraded, universally smooth reveal engine
/**
 * Universally reveals text elements or structural button components
 * Handles multi-line tags, nested layouts, and action inputs seamlessly.
 * @param {HTMLElement} element - The target DOM node instance
 * @param {string} [newText=""] - Optional parameter to swap string data inside text elements
 */
export function smoothReveal(element, newText = "") {
    if (!element) return;

    // 1. Establish high-performance acceleration transition behaviors natively
    element.style.transition = "opacity 0.6s ease, transform 0.6s cubic-bezier(0.34, 1.56, 0.64, 1)";

    // 2. Identify structural interactive buttons or action fields
    if (element.tagName === "BUTTON" || element.classList.contains("btn") || element.tagName === "A") {
        
        // Remove structural display blockades if they are actively hiding the element
        if (element.classList.contains("d-none")) {
            element.style.opacity = "0";
            element.style.transform = "translateY(20px)"; // Pre-position slightly downwards
            element.classList.remove("d-none");
        }

        // Force browser layout repaint using a micro-frame delay execution loop
        requestAnimationFrame(() => {
            element.style.opacity = "1";
            element.style.transform = "translateY(0)"; // Smooth float-up transition
        });
        return;
    }

    // 3. Fallback tracking logic for Text Layout Nodes (H1-H6, P, SPAN)
    if (newText !== "") {
        element.style.opacity = "0";
        element.style.transform = "translateY(10px)";

        setTimeout(() => {
            // Check if string contains custom \g tags or break parameters
            if (newText.includes("\\g") || newText.includes("\n")) {
                element.innerHTML = newText.replace(/\\g/g, '<br>&nbsp;&nbsp;&nbsp;&nbsp;➥ ').replace(/\n/g, '<br>');
            } else {
                element.textContent = newText;
            }
            
            requestAnimationFrame(() => {
                element.style.opacity = "1";
                element.style.transform = "translateY(0)";
            });
        }, 200); // Small delay to let old text fade out before updating
    } else {
        // Simple structural text reveal without modifications
        element.style.opacity = "1";
        element.style.transform = "translateY(0)";
    }
}



// export function smoothReveal(element, newText = "") {
//     // 1. Instantly trigger a slight fade out and minor downward offset positioning layout push
//     element.style.opacity = "0";
//     element.style.transform = "translateY(15px)";
//     element.style.transition = "all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)"; // Elegant spring bounce curve

//     time.sleep(0.15, () => {
//         // 2. If a fresh string value parameter was passed, swap it safely here
//         if (newText !== "") {
//             element.textContent = newText;
//         }
        
//         // 3. Float smoothly back up to true center location point and pop to full opacity
//         element.style.opacity = "1";
//         element.style.transform = "translateY(0)";
//     });
// }


// /**
//  * Adaptive Download Helper
//  * Supports: video, pdf, docx, audio/music, resumes, etc.
//  */
// export async function download(urlString) {
//   // 1. Strict URL Structure Validation
//   let validatedUrl;
//   try {
//     validatedUrl = new URL(urlString);
//   } catch (error) {
//     Toast("Check Your Download Link", "danger");
//     return;
//   }

//   // List of extensions/MIME types your system safely accepts
//   const allowedExtensions = ['mp4', 'mkv', 'avi', 'mp3', 'wav', 'pdf', 'docx', 'doc'];

//   try {
//     // 2. Perform a Fetch request to get file details or bypass Same-Origin limitations
//     const response = await fetch(validatedUrl.href);
    
//     if (!response.ok) {
//       throw new Error("Server returned an error status");
//     }

//     // 3. Inspect the Content-Type header or fallback to filename extraction
//     const contentType = response.headers.get("content-type") || "";
//     const pathName = validatedUrl.pathname.toLowerCase();
//     const detectedExtension = pathName.split('.').pop();

//     // Verify if it maps to any of your supported media types
//     const isSupportedType = 
//       allowedExtensions.includes(detectedExtension) ||
//       contentType.includes("video/") || 
//       contentType.includes("audio/") || 
//       contentType.includes("pdf") || 
//       contentType.includes("wordprocessingml") || // standard docx MIME string
//       contentType.includes("msword");

//     if (!isSupportedType) {
//       Toast("Unsupported file format for download", "danger");
//       return;
//     }
//     Toast("Download Starting")
//     // 4. Extract or Generate a fallback Filename
//     let fileName = pathName.substring(pathName.lastIndexOf('/') + 1) || "downloaded_file";
    
//     // Check if server specifically suggested a file name in headers
//     const contentDisposition = response.headers.get("content-disposition");
//     if (contentDisposition && contentDisposition.includes("filename=")) {
//       const parts = contentDisposition.split("filename=");
//       if (parts[1]) fileName = parts[1].replace(/['"]/g, ""); // clean up quotes
//     }

//     // 5. Convert raw stream to a secure local Blob to bypass cross-origin browser navigation
//     const fileBlob = await response.blob();
//     const localBlobUrl = URL.createObjectURL(fileBlob);

//     // 6. Push the anchor download interaction
//     const anchor = document.createElement("a");
//     anchor.href = localBlobUrl;
//     anchor.download = fileName;
    
//     document.body.appendChild(anchor);
//     anchor.click();

//     // 7. Instant memory cleanup
//     document.body.removeChild(anchor);
//     URL.revokeObjectURL(localBlobUrl);

//   } catch (error) {
//     // Captures network dropouts, CORS blockers, or 404/500 server crashes
//     console.error("Download pipeline failed:", error);
//     Toast("Check Your Download Link", "danger");
//   }
// }

/**
 * Triggers a native browser download for a given resource URL.
 * Supports file URLs, download routes, and Base64 Data URIs.
 * 
 * @param {string} url - The URL or Base64 string of the resource to download.
 * @param {string} [suggestedName] - Optional default name for the downloaded file.
 */
export async function download(url, suggestedName = 'download') {
    // 1. Handle Base64 Data URIs directly
    if (url.startsWith('data:')) {
        const extension = url.split(';')[0].split('/')[1] || 'jpg';
        triggerDownload(url, `${suggestedName}.${extension}`);
        return;
    }

    try {
        // 2. Fetch the resource as a blob to bypass cross-origin browser navigation
        const response = await fetch(url, { mode: 'cors' });
        if (!response.ok) throw new Error('Network response was not ok');
        
        const blob = await response.blob();
        const blobUrl = URL.createObjectURL(blob);
        
        // Extract original file name from URL if not explicitly provided
        const finalName = suggestedName === 'download' 
            ? url.substring(url.lastIndexOf('/') + 1).split('?')[0] || suggestedName
            : suggestedName;

        triggerDownload(blobUrl, finalName);
        
        // Clean up memory
        setTimeout(() => URL.revokeObjectURL(blobUrl), 100);
    } catch (error) {
        console.warn('CORS or fetch restriction encountered. Falling back to direct link download strategy.', error);
        // Fallback: Attempt direct hidden anchor tag navigation download if CORS blocks fetch
        triggerDownload(url, suggestedName)
        Toast("Download Starting");
    }
}

/**
 * Helper function to inject a temporary hidden anchor tag and simulate a click event
 */
function triggerDownload(targetUrl, filename) {
    const anchor = document.createElement('a');
    anchor.href = targetUrl;
    anchor.download = filename;
    anchor.style.display = 'none';
    
    document.body.appendChild(anchor);
    anchor.click();
    document.body.removeChild(anchor);
}


class Highlighter {
    static trigger(targetInput, arg2, arg3) {
        let rawTargets = [];
        if (typeof targetInput === 'string') {
            let cleanStr = targetInput.replace(/[\[\]]/g, '');
            rawTargets = cleanStr.split(',').map(s => s.trim());
        } else if (Array.isArray(targetInput)) {
            rawTargets = targetInput;
        } else {
            rawTargets = [targetInput];
        }

        let domElements = [];
        rawTargets.forEach(idOrClass => {
            domElements = domElements.concat(get.elements(idOrClass));
        });

        if (domElements.length === 0) return;

        let color = "rgba(0, 123, 255, 0.4)"; 
        let duration = 1.6; 

        const isColor = (val) => {
            if (typeof val !== 'string') return false;
            let v = val.toLowerCase().trim();
            if (['', 'none', 'null'].includes(v)) return false;
            return v.startsWith('#') || v.startsWith('rgb') || v.startsWith('hsl') || /^[a-z]+$/.test(v);
        };

        const isDuration = (val) => {
            if (typeof val === 'number' && !isNaN(val)) return true;
            if (typeof val === 'string') {
                let v = val.toLowerCase().trim();
                if (['', 'none', 'null'].includes(v)) return false;
                return !isNaN(parseFloat(v));
            }
            return false;
        };

        [arg2, arg3].forEach(arg => {
            if (isColor(arg)) {
                color = arg.trim();
            } else if (isDuration(arg)) {
                duration = typeof arg === 'string' ? parseFloat(arg) : arg;
            }
        });

        const styleId = "dynamic-android-highlight-style";
        let styleTag = document.getElementById(styleId);
        if (!styleTag) {
            styleTag = document.createElement('style');
            styleTag.id = styleId;
            document.head.appendChild(styleTag);
        }

        styleTag.textContent = `
            @keyframes androidHighlightCustom {
                0% { background-color: ${color}; }
                100% { background-color: transparent; }
            }
            .flash-highlight-active {
                animation: androidHighlightCustom ${duration}s ease-out !important;
                display: inline-block;
                border-radius: 4px;
                padding: 2px 8px;
            }
        `;

        domElements.forEach(el => {
            el.classList.remove('flash-highlight-active');
            void el.offsetWidth;
            el.classList.add('flash-highlight-active');
        });
    }
}
// 1. Core export function you already use
export function flash(target, arg2, arg3) {
    Highlighter.trigger(target, arg2, arg3);
}
// ========================================================
// AUTOMATED INTERCEPTOR (Add this right here)
// ========================================================
document.addEventListener("click", function (e) {
    
    const link = e.target.closest('a[href^="#"]');      // Find if the clicked element (or its parents) is a link starting with #
    if (!link) return;
    const targetId = link.getAttribute("href").substring(1);    // Get the target ID from the href attribute (e.g. "about")
    if (targetId) {
        flash(targetId);        // Automatically fire your engine's highlight transition on click
    }
});


export function invalidinput(id, Action = "field-error" ) {
            const el = get.byid(id, false);
            if (el) {
                el.classList.add(Action);
                el.addEventListener('input', function handler() {
                    el.classList.remove(Action);
                    el.removeEventListener('input', handler);
                }, { once: true });
                get.byid(id, false)?.focus();
            }
        }

export function isEmpty(id) {
            const el = get.byid(id, false);
            return !el || !el.value || !el.value.trim();
        }

export function isInteger(id, condition = true) {
    const el = get.byid ? get.byid(id, false) : document.getElementById(id);
    const rawVal = el ? (el.value !== undefined ? el.value.trim() : String(el).trim()) : String(id).trim();
    const isinteger = /^-?\d+$/.test(rawVal);
    if (isinteger) {
        return (Number(rawVal),true); // Returns clean Integer
    } else {
        if (condition) {
            alert("Make Sure your input is a valid integer!");
        } else {
            throw new Error(`Invalid Integer Input: "${rawVal}"`);
        }
    }
}

export function emptystats(Element) {
            try {
                const tbody = document.getElementById(Element);
                tbody.innerHTML = `
                    <tr id="emptyRow">
                        <td colspan="7">
                            <div class="empty-state">
                                <i class="bi bi-inbox"></i>
                                <p class="mb-0">No students registered yet.<br>Fill the form above to add students.</p>
                            </div>
                        </td>
                    </tr>
                `;
            } catch (error) {alert(error)}
                
        }

export function removeemptystats() {
            const emptyRow = document.getElementById('emptyRow');
            if (emptyRow) emptyRow.remove();
        }

// Toast("𝒲𝐸𝐿𝒞𝒪𝑀𝐸 𝒯𝒪 \n 𝙉𝘼𝙑𝙀𝙀𝙉 𝙆𝙐𝙈𝘼𝙍 𝘾𝙍𝙀𝘼𝙏𝙄𝙊𝙉", "success") OP: 𝒲𝐸𝐿𝒞𝒪𝑀𝐸 𝒯𝒪 
                                                                    //𝙉𝘼𝙑𝙀𝙀𝙉 𝙆𝙐𝙈𝘼𝙍 𝘾𝙍𝙀𝘼𝙏𝙄𝙊𝙉
//Toast("𝒲𝐸𝐿𝒞𝒪𝑀𝐸 𝒯𝒪 \\g 𝙉𝘼𝙑𝙀𝙀𝙉 𝙆𝙐𝙈𝘼𝙍 𝘾𝙍𝙀𝘼𝙏𝙄𝙊𝙉", "success") OP : 𝒲𝐸𝐿𝒞𝒪𝑀𝐸 𝒯𝒪 
                                                                        //➥ 𝙉𝘼𝙑𝙀𝙀𝙉 𝙆𝙐𝙈𝘼𝙍 𝘾𝙍𝙀𝘼𝙏𝙄𝙊𝙉
export function Toast(message, type = 'success') {              
     // 1. Cleanly check for container using native standard DOM methods 
    let container = document.getElementById('toastContainer');
    
    type = type.toLowerCase();
    
    // Spelling fallback handlers
    if (["worining", "woroning", "worning", "wowining", "woring", "yellow", "yelloe", "orrenge", "orenge"].includes(type)) type = "warning";
    if (["eooe", "eoor", "eoror", "danger", "red"].includes(type)) type = "error";
    if (["gerrn", "green", "grren", "aggree", "aggre", "agree"].includes(type)) type = "success";
    
    // 2. Build the container natively if it does not exist yet
    if (!container) {
        container = document.createElement('div');
        container.className = 'toast-container';
        container.id = 'toastContainer';
        document.body.appendChild(container);
    }
    
    // 3. Create individual toast node instance
    const toast = document.createElement('div');
    const icons = {
        success: 'bi-check-circle-fill text-success',
        error: 'bi-x-circle-fill text-danger',
        warning: 'bi-exclamation-triangle-fill text-warning'
    };
    
    toast.className = `custom-toast toast-${type} mb-2`;
    
    // 4. Parse string custom tags: 
    // Convert '\g' into an indented new line featuring the arrow emblem,
    // then fall back to standard breaking structures for normal layout items '\n'
    let formattedMessage = message.replace(/\\g/g, '<br>&nbsp;&nbsp;&nbsp;&nbsp;➥ ');
    formattedMessage = formattedMessage.replace(/\n/g, '<br>');
    
    toast.innerHTML = `<i class="bi ${icons[type] || icons.success}"></i> <span style="white-space: normal; word-break: break-word; width: 100%;">${formattedMessage}</span>`;
    
    // Append notification item to list parent window
    container.appendChild(toast);
    
    // 5. Clean teardown animation sequencing
    setTimeout(() => {
        toast.style.opacity = '0';
        toast.style.transform = 'translateX(100px)';
        toast.style.transition = 'all 0.4s ease';
        setTimeout(() => toast.remove(), 400);
    }, 3000);
}


        // export function Toast(message, type = 'success') {
//     // 1. Cleanly check for container using native standard DOM methods
//     let container = document.getElementById('toastContainer');
    
//     type = type.toLowerCase();
    
//     // Spelling fallback handlers
//     if (["worining", "woroning", "worning", "wowining", "woring", "yellow", "yelloe", "orrenge", "orenge"].includes(type)) type = "warning";
//     if (["eooe", "eoor", "eoror", "danger", "red"].includes(type)) type = "error";
//     if (["gerrn", "green", "grren", "aggree", "aggre", "agree"].includes(type)) type = "success";
    
//     // 2. Build the container natively if it does not exist yet
//     if (!container) {
//         container = document.createElement('div');
//         container.className = 'toast-container';
//         container.id = 'toastContainer';
//         document.body.appendChild(container);
//     }
    
//     // 3. Create individual toast node instance
//     const toast = document.createElement('div');
//     const icons = {
//         success: 'bi-check-circle-fill text-success',
//         error: 'bi-x-circle-fill text-danger',
//         warning: 'bi-exclamation-triangle-fill text-warning'
//     };
    
//     toast.className = `custom-toast toast-${type} mb-2`;
    
//     // 4. Handle multi-line strings (\n) by converting them into structural HTML line breaks (<br>)
//     const formattedMessage = message.replace(/\n/g, '<br>');
    
//     toast.innerHTML = `<i class="bi ${icons[type] || icons.success}"></i> <span style="white-space: normal; word-break: break-word;">${formattedMessage}</span>`;
    
//     // Append notification item to list parent window
//     container.appendChild(toast);
    
//     // 5. Clean teardown animation sequencing
//     setTimeout(() => {
//         toast.style.opacity = '0';
//         toast.style.transform = 'translateX(100px)';
//         toast.style.transition = 'all 0.4s ease';
//         setTimeout(() => toast.remove(), 400);
//     }, 3000);
// }


        // export function Toast(message, type = 'success') {
//     let container = get.byid('toastContainer',false);
//     type = type.toLowerCase()
//     if (["worining", "woroning", "worning", "wowining", "woring", "yellow", "yelloe", "orrenge", "orenge"].includes(type)) type = "warning";
//     if (["eooe", "eoor", "eoror", "danger", "red"].includes(type)) type = "error";
//     if (["gerrn", "green", "grren", "aggree", "aggre", "agree"].includes(type)) type = "success";
//     if (!container) container = change.insertelement('body','<div class="toast-container" id="toastContainer"></div>',"",'insideafter','html');
//     const toast = document.createElement('div');
//     const icons = {
//         success: 'bi-check-circle-fill text-success',
//         error: 'bi-x-circle-fill text-danger',
//         warning: 'bi-exclamation-triangle-fill text-warning'
//     };
//     toast.className = `custom-toast toast-${type} mb-2`;
//     toast.innerHTML = `<i class="bi ${icons[type]}"></i> <span>${message}</span>`;
//     container.appendChild(toast);
//     setTimeout(() => {
//         toast.style.opacity = '0';
//         toast.style.transform = 'translateX(100px)';
//         toast.style.transition = 'all 0.4s ease';
//         setTimeout(() => toast.remove(), 400);
//     }, 3000);
// }

export async function setBG(gifUrl, identifier = "body") {
    if([undefined, null, ""].includes(gifUrl)){alert("PLEASE KINDLY PROVIDE ANY IMAGE/GIF FOR PAGE BACKGROUND"); return;};
    const extensions = ['.webp', '.png', '.jpg', '.jpeg', '.gif'];
    const hasExtension = extensions.some(ext => gifUrl.toLowerCase().endsWith(ext));
    let finalUrl = gifUrl;
    if (!hasExtension) {
        for (const ext of extensions) {
            const testUrl = `${gifUrl}${ext}`;
            if (await Helper.imageExists(testUrl)) {
                finalUrl = testUrl;
                break;
            }
        }
        if (finalUrl === gifUrl) finalUrl += '.gif';
    }

    const els = get.elements(identifier);
    els.forEach(el => {
        Object.assign(el.style, {
            backgroundImage: `url('${finalUrl}')`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            backgroundPosition: 'center'
        });
    });
}

export function setIcon(icon) {
    let link = document.querySelector('link[rel~="icon"]');
    if (!link) {
        link = document.createElement('link');
        link.rel = 'icon';
        link.type = 'image/x-icon';
        document.head.appendChild(link);
    }
    link.href = `./${icon}`;
}

export function setTitle(name) {
    document.title = name;
}

export function Boot(Action = true) {
    if (!Action) return;
    let boot = document.querySelector('link[href$="bootstrap.min.css"]');
    if (!boot) {
        const linkHTML = `<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">`;
        change.insertelement("head", linkHTML, "", "insideafter", "html");
    }
}

// export function setEcss(Action = true) {
//     if (!Action) return;
//     let ECSS = document.querySelector('link[href$="Extream.css"]');
//     if (!ECSS) {
//         ECSS = change.insertelement("head", '<link rel="stylesheet" href="./CSS/Extream.css">', "", "insideafter", "html");
//     }
// }

export function setEcss(Action = true) {
    if (!Action) return;

    // Look for an existing inline style instance using a unique custom attribute identifier
    let ECSS = document.querySelector('style[data-source="Extream-css"]');
    
    if (!ECSS) {
        // Create a style element natively using standard DOM methods
        ECSS = document.createElement("style");
        ECSS.setAttribute("data-source", "Extream-css");
        
        // Inject the complete stylesheet content inside the tag literal
        ECSS.textContent = `
        :root {
            --glass-bg: rgba(255, 255, 255, 0.08);
            --glass-border: rgba(255, 255, 255, 0.15);
            --glass-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
            --accent: #a855f7;
            --accent-hover: #9333ea;
            --text-primary: #f8fafc;
            --text-secondary: #cbd5e1;
            --danger: #ef4444;
            --danger-hover: #dc2626;
        }

        * {
            font-family: 'Poppins', sans-serif;
        }

        body {
            min-height: 100vh;
            background: linear-gradient(135deg, #0f0c29 0%, #302b63 50%, #24243e 100%);
            background-attachment: fixed;
            color: var(--text-primary);
            overflow-x: hidden;
        }

        .bg-particles {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            pointer-events: none;
            z-index: 0;
            overflow: hidden;
        }

        .bg-particles::before,
        .bg-particles::after {
            content: '';
            position: absolute;
            width: 300px;
            height: 300px;
            border-radius: 50%;
            background: radial-gradient(circle, rgba(168, 85, 247, 0.15) 0%, transparent 70%);
            animation: float 20s infinite ease-in-out;
        }

        .bg-particles::before {
            top: 10%;
            left: 10%;
            animation-delay: 0s;
        }

        .bg-particles::after {
            bottom: 10%;
            right: 10%;
            width: 400px;
            height: 400px;
            animation-delay: -10s;
            animation-duration: 25s;
        }

        @keyframes float {
            0%, 100% { transform: translate(0, 0) scale(1); }
            33% { transform: translate(30px, -30px) scale(1.1); }
            66% { transform: translate(-20px, 20px) scale(0.9); }
        }

        .glass-card {
            background: var(--glass-bg);
            backdrop-filter: blur(20px);
            -webkit-backdrop-filter: blur(20px);
            border: 1px solid var(--glass-border);
            border-radius: 24px;
            box-shadow: var(--glass-shadow);
            transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .glass-card:hover {
            transform: translateY(-2px);
            box-shadow: 0 12px 40px rgba(0, 0, 0, 0.4);
        }

        .form-floating > .form-control,
        .form-floating > .form-select {
            background: rgba(255, 255, 255, 0.05);
            border: 1px solid rgba(255, 255, 255, 0.1);
            color: var(--text-primary);
            border-radius: 12px;
        }

        .form-floating > .form-control:focus,
        .form-floating > .form-select:focus {
            background: rgba(255, 255, 255, 0.08);
            border-color: var(--accent);
            box-shadow: 0 0 0 0.25rem rgba(168, 85, 247, 0.25);
            color: var(--text-primary);
        }

        .form-floating > label {
            color: var(--text-secondary);
        }

        .form-floating > .form-control:focus ~ label,
        .form-floating > .form-control:not(:placeholder-shown) ~ label,
        .form-floating > .form-select ~ label {
            color: var(--accent);
        }

        .gender-radio {
            display: none;
        }

        .gender-label {
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 8px;
            padding: 12px 24px;
            border-radius: 12px;
            border: 1px solid rgba(255, 255, 255, 0.1);
            background: rgba(255, 255, 255, 0.05);
            cursor: pointer;
            transition: all 0.3s ease;
            color: var(--text-secondary);
            font-weight: 500;
        }

        .gender-label:hover {
            background: rgba(255, 255, 255, 0.1);
            border-color: rgba(168, 85, 247, 0.5);
        }

        .gender-radio:checked + .gender-label {
            background: rgba(168, 85, 247, 0.2);
            border-color: var(--accent);
            color: var(--text-primary);
            box-shadow: 0 0 15px rgba(168, 85, 247, 0.3);
        }

        .btn-glow {
            background: linear-gradient(135deg, var(--accent), var(--accent-hover));
            border: none;
            border-radius: 12px;
            padding: 14px 32px;
            font-weight: 600;
            letter-spacing: 0.5px;
            color: white;
            transition: all 0.3s ease;
            position: relative;
            overflow: hidden;
        }

        .btn-glow::before {
            content: '';
            position: absolute;
            top: 0;
            left: -100%;
            width: 100%;
            height: 100%;
            background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
            transition: left 0.5s ease;
        }

        .btn-glow:hover::before {
            left: 100%;
        }

        .btn-glow:hover {
            transform: translateY(-2px);
            box-shadow: 0 8px 25px rgba(168, 85, 247, 0.4);
        }

        .btn-glow:active {
            transform: translateY(0);
        }

        .data-table {
            background: var(--glass-bg);
            backdrop-filter: blur(20px);
            border: 1px solid var(--glass-border);
            border-radius: 20px;
            overflow: hidden;
        }

        .data-table thead th {
            background: rgba(168, 85, 247, 0.15);
            color: var(--text-primary);
            font-weight: 600;
            padding: 16px;
            border-bottom: 1px solid var(--glass-border);
            text-transform: uppercase;
            font-size: 0.85rem;
            letter-spacing: 0.5px;
        }

        .data-table tbody td {
            padding: 14px 16px;
            color: var(--text-secondary);
            border-bottom: 1px solid rgba(255, 255, 255, 0.05);
            vertical-align: middle;
        }

        .data-table tbody tr {
            transition: background 0.2s ease;
        }

        .data-table tbody tr:hover {
            background: rgba(255, 255, 255, 0.03);
        }

        .data-table tbody tr:last-child td {
            border-bottom: none;
        }

        .btn-delete {
            background: rgba(239, 68, 68, 0.1);
            border: 1px solid rgba(239, 68, 68, 0.3);
            color: var(--danger);
            padding: 6px 16px;
            border-radius: 8px;
            font-size: 0.85rem;
            font-weight: 500;
            transition: all 0.3s ease;
            display: inline-flex;
            align-items: center;
            gap: 6px;
        }

        .btn-delete:hover {
            background: var(--danger);
            color: white;
            box-shadow: 0 4px 15px rgba(239, 68, 68, 0.3);
        }

        .section-title {
            font-size: 1.5rem;
            font-weight: 700;
            margin-bottom: 1.5rem;
            display: flex;
            align-items: center;
            gap: 12px;
        }

        .section-title i {
            color: var(--accent);
        }

        @keyframes slideIn {
            from { opacity: 0; transform: translateX(-20px); }
            to { opacity: 1; transform: translateX(0); }
        }

        .row-animate {
            animation: slideIn 0.4s ease forwards;
        }

        .empty-state {
            text-align: center;
            padding: 40px 20px;
            color: var(--text-secondary);
        }

        .empty-state i {
            font-size: 3rem;
            margin-bottom: 1rem;
            opacity: 0.5;
        }

        .toast-container {
            position: fixed;
            top: 20px;
            right: 20px;
            z-index: 9999;
        }

        .custom-toast {
            background: var(--glass-bg);
            backdrop-filter: blur(20px);
            border: 1px solid var(--glass-border);
            border-radius: 12px;
            color: var(--text-primary);
            padding: 16px 24px;
            box-shadow: var(--glass-shadow);
            display: flex;
            align-items: center;
            gap: 12px;
            animation: toastSlide 0.4s ease;
        }

        @keyframes toastSlide {
            from { opacity: 0; transform: translateX(100px); }
            to { opacity: 1; transform: translateX(0); }
        }

        .toast-success { border-left: 4px solid #22c55e; }
        .toast-error { border-left: 4px solid var(--danger); }
        .toast-warning { border-left: 4px solid #f59e0b; }

        .field-error {
            border-color: #ef4444 !important;
            box-shadow: 0 0 0 0.25rem rgba(239, 68, 68, 0.25) !important;
            transition: all 0.3s ease;
        }

        @media (max-width: 768px) {
            .glass-card { margin: 0 10px; }
            .data-table { font-size: 0.9rem; }
        }

        .glass-navbar {
            background: rgba(15, 12, 41, 0.7) !important;
            backdrop-filter: blur(20px);
            -webkit-backdrop-filter: blur(20px);
            border-bottom: 4px solid #22c55e;
            box-shadow: var(--glass-shadow);
            border-radius: 16px;  
            z-index: 1050;
            margin: 15px auto 0 auto;
            width: calc(100% - 50px);
            position: relative;
        }

        Use code with caution.
        .glass-navbar .navbar-nav .nav-link {
        color: var(--text-secondary);
        padding: 10px 12px;
        border-radius: 8px;
        transition: all 0.3s ease;
        }

        .glass-navbar .navbar-nav .nav-link:hover {
        color: var(--text-primary);
        background: rgba(255, 255, 255, 0.05);
        padding-left: 18px;
        }

        .text-zoom-hover {
        display: block;
        transition: transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
        cursor: pointer;
        }

        .text-zoom-hover:hover {
        transform: scale(1.15);
        }
        
        @media (min-width: 768px) {
        .glass-navbar .navbar-collapse {
        display: block !important;
        visibility: hidden;
        opacity: 0;
        transform: translateX(-10px);
        transition: opacity 0.3s ease, transform 0.3s ease, visibility 0.3s;
        }

        .nav-hover-trigger:hover .navbar-collapse {
        visibility: visible;
        opacity: 1;
        transform: translateX(0);
        }

        }

        .google-nav-container {
        padding-left: 1.5rem !important;
        padding-right: 1.5rem !important;
        }

        .brand-trigger-zone {
        position: static;
        padding-bottom: 12px;
        margin-top: 8px;
        }

        .arrow-icon {
        font-size: 0.65rem;
        vertical-align: middle;
        margin-left: 4px;
        opacity: 0.7;
        transition: transform 0.25s ease;
        }

        .food-hover-trigger {
        position: relative;
        display: flex;
        align-items: center;
        margin-left: 20px;
        padding-left: 70px;
        }

        .food-dropdown {
        position: absolute;
        top: calc(100% + 10px);
        left: 0;
        min-width: 430px;
        padding: 14px 20px;
        background: rgba(13, 10, 36, 0.95);
        backdrop-filter: blur(25px);
        -webkit-backdrop-filter: blur(25px);
        border: 1px solid rgba(255, 255, 255, 0.12);
        border-radius: 0 0 16px 16px;
        box-shadow: 0 15px 30px rgba(0, 0, 0, 0.5);
        z-index: 2000;
        opacity: 0;
        visibility: hidden;
        transform: translateY(-8px);
        transition: opacity 0.25s ease, transform 0.25s ease, visibility 0.25s ease;
        }

        .food-hover-trigger:hover .food-dropdown {
        opacity: 1;
        visibility: visible;
        transform: translateY(0);
        }

        .food-dropdown .nav-link {
        color: var(--text-secondary) !important;
        padding: 8px 10px !important;
        border-radius: 8px;
        white-space: nowrap;
        transition: color 0.2s ease, background 0.2s ease, transform 0.2s ease;
        }

        .food-dropdown .nav-link:hover {
        color: var(--text-primary) !important;
        background: rgba(255, 255, 255, 0.06);
        transform: translateX(4px);
        }

        .food-dropdown .nav-link i {
        color: var(--accent);
        margin-right: 6px;
        }

        .recipe-item-container {
        position: relative;
        }

        .item-detail-window {
        position: absolute;
        left: calc(100% + 2px);
        top: 30px;
        width: 280px;
        padding: 14px;
        background: rgba(18, 14, 48, 0.98);
        border: 1px solid rgba(255, 255, 255, 0.15);
        border-radius: 12px;
        box-shadow: 0 10px 25px rgba(0, 0, 0, 0.6);
        pointer-events: none;
        opacity: 0;
        visibility: hidden;
        transform: translateX(-10px);
        transition: opacity 0.2s ease, transform 0.2s ease, visibility 0.2s;
        z-index: 2100;
        }

        .recipe-item-container:hover .item-detail-window {
        opacity: 1;
        visibility: visible;
        transform: translateX(0);
        }

        .detail-title {
        color: var(--text-primary);
        font-size: 0.95rem;
        font-weight: 600;
        }

        .detail-price {
        color: #22c55e;
        font-size: 0.95rem;
        font-weight: 700;
        }

        .detail-description {
        color: var(--text-secondary);
        font-size: 0.8rem;
        line-height: 1.4;
        white-space: normal;
        }

        .glass-footer {
        background: var(--glass-bg);
        backdrop-filter: blur(20px);
        -webkit-backdrop-filter: blur(20px);
        border-top: 1px solid var(--glass-border);
        box-shadow: var(--glass-shadow);
        padding: 30px 0;
        margin-top: 60px;
        width: 100%;
        z-index: 10;
        position: relative;
        }

        .footer-brand {
        color: var(--text-primary);
        font-size: 1.3rem;
        font-weight: 700;
        letter-spacing: 0.5px;
        }

        .footer-section-title {
        color: var(--accent);
        font-size: 0.85rem;
        font-weight: 700;
        text-transform: uppercase;
        letter-spacing: 1px;
        margin-bottom: 10px;
        }

        .footer-info-text {
        color: var(--text-secondary);
        font-size: 0.85rem;
        line-height: 1.5;
        }

        .copyright-text {
        color: rgba(255, 255, 255, 0.4);
        font-size: 0.75rem;
        letter-spacing: 0.3px;
        }

        .mr-2 {
        margin-right: 0.5rem;
        }

        `;
        // Safely append the populated style node to the document head
        document.head.appendChild(ECSS);
        }

}

export function setCss(Action = true){
    if (!Action) return;
    let CSS = document.querySelector('link[href$="CSS.css"]')
    if (!CSS) {
        CSS = change.insertelement("head", '<link rel="stylesheet" href="./CSS/CSS.css">', "", "insideafter", "html");
    }
}

export function Range(startOrObj, end, step = 1) {
    if (step === 0) throw new Error("Range step cannot be 0.");
    
    let start = startOrObj;
    let actualEnd = end;

    // Array / NodeList / Object with length handler
    if (typeof startOrObj === "object" && startOrObj !== null && "length" in startOrObj) {
        start = 0;
        actualEnd = startOrObj.length - 1;
    } else if (actualEnd === undefined) {
        actualEnd = start; // Range(5) Handler
        start = 0;
    }

    const result = [];
    const up = start <= actualEnd;
    const increment = up ? Math.abs(step) : -Math.abs(step);

    for (let i = start; up ? i <= actualEnd : i >= actualEnd; i += increment) {
        result.push(i);
    }
    return result;
}

export function ArrayPrinter(Value, returne = true, textcontent = true) {
    const list = get.elements(Value);
    if (returne) {
        list.forEach((el, index) => print(`${index + 1}. ${textcontent ? el.textContent : el.innerHTML}`));
    } else {
        return list.map((el) => (textcontent ? el.value : el.innerHTML));
    }
}

// addEventListener (change.addclickevent()) works with many events
// | Event        | Triggered when                          |
// | ------------ | --------------------------------------- |
// | `click`      | Mouse click                             |
// | `dblclick`   | Double click                            |
// | `mousedown`  | Mouse button pressed down               |
// | `mouseup`    | Mouse button released                   |
// | `mousemove`  | Mouse moves over element                |
// | `mouseenter` | Mouse enters element                    |
// | `mouseleave` | Mouse leaves element                    |
// | `keydown`    | Any key pressed down *(Most Safe)*      |
// | `keyup`      | Any key released                        |
// | `keypress`   | Key pressed (deprecated, use `keydown`) |
// | `input`      | Input value changes *(Always Listen)*   |
// | `change`     | Input value changes and loses focus     |
// | `focus`      | Element gets focus                      |
// | `blur`       | Element loses focus                     |
// | `submit`     | Form submitted                          |
// | `load`       | Page/resource finished loading          |
// | `resize`     | Window resized                          |
// | `scroll`     | Page scrolled                           |

// Most Usefull For (change.addclickevent()) 
// | `input`      | Input value changes *(Always Listen)*   |
// | `keydown`    | Any key pressed down *(Most Safe)*      |


// ====================================================================================================================================================================================================================================================================================================================================================================================================================================================================================================================
// --- : GET CLASS : ---
// ====================================================================================================================================================================================================================================================================================================================================================================================================================================================================================================================

export class get {          // Internal/Shared Helper: Resolves any identifier, node, or collection into a flat Array of HTMLElements.
    static elements(identifier) {
        if (!identifier) return [];
        if (typeof identifier === "string") {
            const byId = document.getElementById(identifier);           // First check direct ID
            if (byId) return [byId];
            try {           // Fallback to querySelectorAll for classes, tags, and complex selectors
                return Array.from(document.querySelectorAll(identifier));
            } catch (e) {
                try {           // If querySelectorAll fails (e.g., class name given without leading dot)
                    return Array.from(document.querySelectorAll(`.${identifier}`));
                } catch {
                    return [];
                }
            }
        }
        if (identifier instanceof HTMLElement) return [identifier];
        if (identifier instanceof NodeList || identifier instanceof HTMLCollection || Array.isArray(identifier)) {
            return Array.from(identifier);
        }
        return [];
    }

    static gender() {
            const male = get.byid("male", false);
            const female = get.byid("female", false);
            if (male && male.checked) return "male";
            if (female && female.checked) return "female";
            return "";
        }

    static byid(id, returnText = true) {
        const element = document.getElementById(id);
        if (!element) return null;
        return returnText ? element.textContent : element;
    }

    static byname(ID) {
        return document.getElementsByName(ID);
    }

    static bytag(ID) {
        return document.getElementsByTagName(ID);
    }

    static allbyclass(ID) {
        return document.querySelectorAll(`.${ID}`);
    }

    static byclass(ID, returnText = true) {
        const element = document.querySelector(`.${ID}`) || document.querySelector(ID);
        if (!element) return null;
        return returnText ? element.textContent : element;
    }

    static byclassname(ID) {
        return document.getElementsByClassName(ID);
    }

    static Qselect(ID, returnText = true) {
        const element = document.querySelector(ID) || document.querySelector(ID);
        if (!element) return null;
        return returnText ? element.textContent : element;
    }

    static inputgetter(id, returnText = true) {
        const result = get.byid(id, false);
        if (!result) return null;
        if (returnText === false) {         // 1. If false, directly return the element node immediately
            return result;
        }
        let extractedValue;         // 2. Value extraction based on element type
        if (result.type === "checkbox") {
            extractedValue = result.checked;
        } else if (result.type === "radio") {           // Handle radio group by name, or fallback to checked state if single element
            const checkedRadio = document.querySelector(`input[name="${result.name}"]:checked`);
            if (checkedRadio) {
                extractedValue = checkedRadio.value !== "on" ? checkedRadio.value : checkedRadio.id;
            } else {
                extractedValue = result.checked ? (result.value !== "on" ? result.value : result.id) : null;
            }
        } else if (result.type === "number" || result.type === "range") {
            extractedValue = result.value === "" ? null : Number(result.value);
        } else if (result.tagName === "SELECT") {
            extractedValue = result.value;
        } else {
            extractedValue = result.value;          // Fallback for text, textarea, email, password, etc.
        }
        const mode = String(returnText).toLowerCase();          // 3. Output / Return logic based on mode
        if (mode === "print" || mode === "show") {
            print(extractedValue);
        } else if (mode === "printfull" || mode === "showfull") {
            print(result);
        } else if (returnText === true) {
            return extractedValue;
        } else {
            const err = "INPUT-GETTER USE-CASE:\nError: Invalid returnText value. Please use true, false, 'print', 'show', 'printfull', or 'showfull'.";
            print(err);
            alert(err);
        }
    }
}

// ====================================================================================================================================================================================================================================================================================================================================================================================================================================================================================================================
// --- : CHANGE CLASS : ---
// ====================================================================================================================================================================================================================================================================================================================================================================================================================================================================================================================

export class change {
    static byid(id, content) {
        const el = document.getElementById(id);
        if (el) el.innerHTML = content;
        return content;
    }

    static byclass(ID, Value) {
        const el = document.querySelector(`.${ID}`) || document.querySelector(ID);
        if (el) el.textContent = Value;
        return el;
    }

    static allbyclass(elements, values) {
        const targetElements = get.elements(elements);
        targetElements.forEach((element, index) => {
            if (values[index] !== undefined) {
                element.textContent = values[index];
            }
        });
        return targetElements;
    }

    static inputclear(...ids) {
        const targetIds = ids.flat();           // Rest parameters (...ids) flatten multi-arguments and nested arrays automatically
        for (const targetId of targetIds) {
            const el = get.elements(targetId)[0];
            if (!el) continue;
            if(el) el.type === "radio" || el.type === "checkbox"? el.checked = false : el.value = "";
        }
    }

    static addclickevent(identifier, Program, Function = "click") {
        const identifiers = Array.isArray(identifier) ? identifier : [identifier];
        identifiers.forEach(id => {
            const elements = get.elements(id);
            elements.forEach(el => {
                el.addEventListener(Function, (e) => Program(id, e));
            });
        });
    }

    static addattribute(id, value, attribute = "class") {
        const el = document.getElementById(id);
        if (el) el.setAttribute(attribute, value);
    }

    static removeattribute(id, attribute = "class") {
        const el = document.getElementById(id);
        if (el) el.removeAttribute(attribute);
    }

    static delete(eventOrElement, parentelement = true) {
        let targetElement;
        if (parentelement) {
            if (eventOrElement && eventOrElement.target) {      // Delete immediate parent (for <button> inside <td>)
                eventOrElement.target.parentElement.remove();
            }
        } else {
            if (eventOrElement && eventOrElement.target) {      // Delete closest <tr> (the whole row)
                targetElement = eventOrElement.target.closest('tr');
            } else if (eventOrElement instanceof HTMLElement) {
                targetElement = eventOrElement.closest('tr');
            }
            if (targetElement) targetElement.remove();
        }
    }
    
    static alwayslistener(focus_id, change_id, Function = "input") {
        change.addclickevent(focus_id, () => {
            change.byid(change_id, get.inputgetter(focus_id));
        }, Function);
    }

    static createtag(Tag, Text, TF = true) {
        const list = document.createElement(Tag);
        list.innerHTML = Text;
        return TF ? list : list.innerHTML;
    }

    static insertelement(MainTag, SubTag, text = "", side = "insideafter", MODE = "element") {
        const Side = String(side).toLowerCase();
        const modeMap = {
            before: "beforebegin",
            after: "afterend",
            insidebefore: "afterbegin",
            insideafter: "beforeend"
        };
        const position = modeMap[Side];
        const mainEl = get.elements(MainTag)[0];
        if (position && mainEl) {
            const inputMode = String(MODE).toLowerCase();
            if (inputMode === "html" || inputMode === "innerhtml") {
                let htmlString = typeof SubTag === "string" ? SubTag : SubTag.outerHTML;
                mainEl.insertAdjacentHTML(position, htmlString);
                const temp = document.createElement("template");
                temp.innerHTML = htmlString.trim();
                const parsedEl = temp.content.firstElementChild;
                if (parsedEl && text) {
                    const createdId = parsedEl.id;
                    const createdClass = parsedEl.className;

                    if (createdId) {
                        change.byid(createdId, text);
                    } else if (createdClass) {
                        change.byclass(createdClass, text);
                    } else {
                        const insertedEl = mainEl.lastElementChild;
                        if (insertedEl) insertedEl.innerHTML = text;
                    }
                }
                return mainEl.lastElementChild;
            } 
            else {
                const childEl = typeof SubTag === "string" ? change.createtag(SubTag, text) : SubTag;
                return mainEl.insertAdjacentElement(position, childEl);
            }
        } else {
            const err = `INPUT ERROR:\nElement "${MainTag}" not found or invalid side "${side}".`;
            print(err);
            alert(err);
        }
    }

    static hider(identifier, state = undefined) {
        const items = get.elements(identifier);
        items.forEach(el => {
            el.hidden = (state === undefined) ? !el.hidden : !state;
        });
    }

    static Byid = class {
        static bgcolor(id, color) {
            const el = document.getElementById(id);
            if (el) el.style.backgroundColor = String(color).toLowerCase();
        }
        static color(id, color) {
            const el = get.byid(id);
            if (el) el.style.color = String(color).toLowerCase();
        }
        static addattribute(id, attribute, value) {
            change.addattribute(id, value, attribute);
        }
    };
}

// ====================================================================================================================================================================================================================================================================================================================================================================================================================================================================================================================
// --- : KEYBOARD CLASS : ---
// ====================================================================================================================================================================================================================================================================================================================================================================================================================================================================================================================

export class keyboard {
    static keypress(actions, keys, callback = null, addclickevent = true, eventType = "keydown") {
        const actionArray = Array.isArray(actions) ? actions : [actions];
        const keyArray = Array.isArray(keys) ? keys : [keys];
        if (addclickevent) {
            actionArray.forEach(id => {
                if (typeof id === "string") {
                    change.addclickevent(id, () => {
                        if (callback) callback(id, "click");
                    });
                }
            });
        }

        document.addEventListener(eventType, (e) => {
            const keyIndex = keyArray.indexOf(e.key);

            if (keyIndex !== -1) {
                const activeEl = document.activeElement;
                
                let matchedAction = actionArray.find(id => {
                    const targetEl = document.getElementById(id) || document.querySelector(`.${id}`);
                    return targetEl && (targetEl === activeEl || targetEl.contains(activeEl));
                });

                if (!matchedAction) {
                    matchedAction = actionArray[keyIndex] || actionArray[0];
                }

                if (callback) callback(matchedAction, e.key);
            }
        });
    }
}

// ====================================================================================================================================================================================================================================================================================================================================================================================================================================================================================================================
// --- : STYLE CLASS : ---
// ====================================================================================================================================================================================================================================================================================================================================================================================================================================================================================================================

// USE Case !
// import { style } from './HTML.js';

// // By ID
// style.center("loginBox");           // flex center (default)

// // By class
// style.center(".modal", "absolute"); // absolute center all modals

// // By tag
// style.center("section", "grid");    // grid center all sections

// // Full screen
// style.centerscreen("app");          // #app fills viewport, centered

// // Multiple
// style.center(["header", "footer"]);

export const style = {
    // Apply centering to any element(s)
    center: function(identifier, type = 'flex') {
        const els = get.elements(identifier);
        if (els.length === 0) return null;

        const styles = {
            flex: {
                display: 'flex',
                flexDirection: 'column', // Stacks your form div and table div vertically
                justifyContent: 'center', // Centers vertically when height is 100vh
                alignItems: 'center',    // Centers horizontally
                minHeight: '100vh'        // 🌟 REQUIRED: Forces container to take full browser screen height!
            },
            grid: {
                display: 'grid',
                placeItems: 'center',
                minHeight: '100vh'        // 🌟 REQUIRED
            },
            absolute: {
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)'
            }
        };

        els.forEach(el => Object.assign(el.style, styles[type]));
        return els.length === 1 ? els[0] : els;
    },
    
    // Center on full screen
    centerscreen: function(identifier) {
        const els = elements(identifier);
        if (els.length === 0) return null;

        els.forEach(el => {
            el.style.display = 'flex';
            el.style.justifyContent = 'center';
            el.style.alignItems = 'center';
            el.style.height = '100vh';
            el.style.margin = '0';
        });

        return els.length === 1 ? els[0] : els;
    },
    centerGrid: function(targetId) {
        const el = get.byid(targetId, false);
        if (el) {
            el.style.display = "grid";
            el.style.placeItems = "center";
            el.style.minHeight = "100vh";
        }
    }

};

// ====================================================================================================================================================================================================================================================================================================================================================================================================================================================================================================================
// --- : MATHS CLASS : ---
// ====================================================================================================================================================================================================================================================================================================================================================================================================================================================================================================================

export class Maths {

    static Age(Num, Valid = 100, Minimum= 0) {
        const num = parseInt(Num)
        if (typeof num !== "number") {
            throw new TypeError(`Expected number, got ${typeof num}`);
        }
        if (num < Minimum) {
            throw new RangeError("Age cannot be negative");
        }
        if (num > Valid) {
            throw new RangeError("Age exceeded maximum (100)");
        }
        return num,true;
    }

    static AddInt(ChangeID, ID1, ID2) {
        const val1 = get.byid(ID1, false)?.value || 0;
        const val2 = get.byid(ID2, false)?.value || 0;
        const num1 = parseInt(val1, 10) || 0;
        const num2 = parseInt(val2, 10) || 0;
        change.byid(ChangeID, `Total: ${num1 + num2}`);
    }

    static AddFloat(ChangeID, ID1, ID2) {
        const val1 = get.byid(ID1, false)?.value || 0;
        const val2 = get.byid(ID2, false)?.value || 0;
        const num1 = parseFloat(val1) || 0;
        const num2 = parseFloat(val2) || 0;
        change.byid(ChangeID, `Total: ${num1 + num2}`);
    }

    static AddString(ChangeID, ID1, ID2) {
        const num1 = get.byid(ID1, false)?.value || "";
        const num2 = get.byid(ID2, false)?.value || "";
        change.byid(ChangeID, `Total: ${num1 + num2}`);
    }
}