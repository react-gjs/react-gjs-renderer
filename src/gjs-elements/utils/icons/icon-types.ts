declare global {
  namespace Rg {
    type IconName =
      | "accessories-calculator-symbolic"
      | "accessories-calculator"
      | "accessories-character-map-symbolic"
      | "accessories-character-map"
      | "accessories-dictionary-symbolic"
      | "accessories-dictionary"
      | "accessories-text-editor-symbolic"
      | "accessories-text-editor"
      | "action-unavailable-symbolic"
      | "action-unavailable"
      | "address-book-new-symbolic"
      | "address-book-new"
      | "airplane-mode-symbolic"
      | "airplane-mode"
      | "alarm-symbolic"
      | "alarm"
      | "application-certificate-symbolic"
      | "application-certificate"
      | "application-exit-symbolic"
      | "application-exit"
      | "application-rss+xml-symbolic"
      | "application-rss+xml"
      | "application-x-addon-symbolic"
      | "application-x-addon"
      | "application-x-appliance-symbolic"
      | "application-x-appliance"
      | "application-x-executable-symbolic"
      | "application-x-executable"
      | "applications-accessories"
      | "applications-development"
      | "applications-engineering-symbolic"
      | "applications-engineering"
      | "applications-games-symbolic"
      | "applications-games"
      | "applications-graphics-symbolic"
      | "applications-graphics"
      | "applications-internet"
      | "applications-multimedia-symbolic"
      | "applications-multimedia"
      | "applications-office"
      | "applications-other"
      | "applications-science-symbolic"
      | "applications-science"
      | "applications-system-symbolic"
      | "applications-system"
      | "applications-utilities-symbolic"
      | "applications-utilities"
      | "appointment-missed-symbolic"
      | "appointment-missed"
      | "appointment-new-symbolic"
      | "appointment-new"
      | "appointment-soon-symbolic"
      | "appointment-soon"
      | "audio-card-symbolic"
      | "audio-card"
      | "audio-headphones-symbolic"
      | "audio-headphones"
      | "audio-headset-symbolic"
      | "audio-headset"
      | "audio-input-microphone-symbolic"
      | "audio-input-microphone"
      | "audio-speakers-symbolic"
      | "audio-speakers"
      | "audio-volume-high-symbolic"
      | "audio-volume-high"
      | "audio-volume-low-symbolic"
      | "audio-volume-low"
      | "audio-volume-medium-symbolic"
      | "audio-volume-medium"
      | "audio-volume-muted-symbolic"
      | "audio-volume-muted"
      | "audio-x-generic-symbolic"
      | "audio-x-generic"
      | "avatar-default-symbolic"
      | "avatar-default"
      | "battery-caution-charging-symbolic"
      | "battery-caution-charging"
      | "battery-caution-symbolic"
      | "battery-caution"
      | "battery-empty-charging-symbolic"
      | "battery-empty-charging"
      | "battery-empty-symbolic"
      | "battery-empty"
      | "battery-full-charged-symbolic"
      | "battery-full-charged"
      | "battery-full-charging-symbolic"
      | "battery-full-charging"
      | "battery-full-symbolic"
      | "battery-full"
      | "battery-good-charging-symbolic"
      | "battery-good-charging"
      | "battery-good-symbolic"
      | "battery-good"
      | "battery-low-charging-symbolic"
      | "battery-low-charging"
      | "battery-low-symbolic"
      | "battery-low"
      | "battery-missing-symbolic"
      | "battery-missing"
      | "battery-symbolic"
      | "battery"
      | "bluetooth-active-symbolic"
      | "bluetooth-active"
      | "bluetooth-disabled-symbolic"
      | "bluetooth-disabled"
      | "bookmark-new-symbolic"
      | "bookmark-new"
      | "call-missed-symbolic"
      | "call-missed"
      | "call-start-symbolic"
      | "call-start"
      | "call-stop-symbolic"
      | "call-stop"
      | "camera-photo-symbolic"
      | "camera-photo"
      | "camera-video-symbolic"
      | "camera-video"
      | "camera-web-symbolic"
      | "camera-web"
      | "changes-allow-symbolic"
      | "changes-allow"
      | "changes-prevent-symbolic"
      | "changes-prevent"
      | "channel-insecure-symbolic"
      | "channel-insecure"
      | "channel-secure-symbolic"
      | "channel-secure"
      | "colorimeter-colorhug-symbolic"
      | "colorimeter-colorhug"
      | "computer-apple-ipad-symbolic"
      | "computer-apple-ipad"
      | "computer-fail-symbolic"
      | "computer-fail"
      | "computer-symbolic"
      | "computer"
      | "contact-new-symbolic"
      | "contact-new"
      | "content-loading-symbolic"
      | "content-loading"
      | "daytime-sunrise-symbolic"
      | "daytime-sunrise"
      | "daytime-sunset-symbolic"
      | "daytime-sunset"
      | "dialog-error-symbolic"
      | "dialog-error"
      | "dialog-information-symbolic"
      | "dialog-information"
      | "dialog-password-symbolic"
      | "dialog-password"
      | "dialog-question-symbolic"
      | "dialog-question"
      | "dialog-warning-symbolic"
      | "dialog-warning"
      | "display-brightness-symbolic"
      | "display-brightness"
      | "display-projector-symbolic"
      | "display-projector"
      | "document-edit-symbolic"
      | "document-edit"
      | "document-new-symbolic"
      | "document-new"
      | "document-open-recent-symbolic"
      | "document-open-recent"
      | "document-open-symbolic"
      | "document-open"
      | "document-page-setup-symbolic"
      | "document-page-setup"
      | "document-print-preview-symbolic"
      | "document-print-preview"
      | "document-print-symbolic"
      | "document-print"
      | "document-properties-symbolic"
      | "document-properties"
      | "document-revert-symbolic"
      | "document-revert"
      | "document-save-as-symbolic"
      | "document-save-as"
      | "document-save-symbolic"
      | "document-save"
      | "document-send-symbolic"
      | "document-send"
      | "drive-harddisk-ieee1394-symbolic"
      | "drive-harddisk-ieee1394"
      | "drive-harddisk-symbolic"
      | "drive-harddisk-system-symbolic"
      | "drive-harddisk-system"
      | "drive-harddisk"
      | "drive-multidisk-symbolic"
      | "drive-multidisk"
      | "drive-optical-symbolic"
      | "drive-optical"
      | "drive-removable-media-symbolic"
      | "drive-removable-media"
      | "edit-clear-all-symbolic"
      | "edit-clear-all"
      | "edit-clear-symbolic"
      | "edit-clear"
      | "edit-copy-symbolic"
      | "edit-copy"
      | "edit-cut-symbolic"
      | "edit-cut"
      | "edit-delete-symbolic"
      | "edit-delete"
      | "edit-find-replace-symbolic"
      | "edit-find-replace"
      | "edit-find-symbolic"
      | "edit-find"
      | "edit-paste-symbolic"
      | "edit-paste"
      | "edit-redo-symbolic"
      | "edit-redo"
      | "edit-select-all-symbolic"
      | "edit-select-all"
      | "edit-select-symbolic"
      | "edit-select"
      | "edit-undo-symbolic"
      | "edit-undo"
      | "emblem-default-symbolic"
      | "emblem-default"
      | "emblem-documents-symbolic"
      | "emblem-documents"
      | "emblem-downloads"
      | "emblem-favorite-symbolic"
      | "emblem-favorite"
      | "emblem-generic"
      | "emblem-important-symbolic"
      | "emblem-important"
      | "emblem-mail"
      | "emblem-new"
      | "emblem-ok-symbolic"
      | "emblem-ok"
      | "emblem-package"
      | "emblem-photos-symbolic"
      | "emblem-photos"
      | "emblem-readonly"
      | "emblem-shared-symbolic"
      | "emblem-shared"
      | "emblem-symbolic-link"
      | "emblem-synchronized"
      | "emblem-synchronizing-symbolic"
      | "emblem-synchronizing"
      | "emblem-system-symbolic"
      | "emblem-system"
      | "emblem-unreadable"
      | "emblem-urgent"
      | "emblem-videos-symbolic"
      | "emblem-videos"
      | "emblem-web"
      | "error-correct-symbolic"
      | "error-correct"
      | "face-angel-symbolic"
      | "face-angel"
      | "face-angry-symbolic"
      | "face-angry"
      | "face-cool-symbolic"
      | "face-cool"
      | "face-crying-symbolic"
      | "face-crying"
      | "face-devilish-symbolic"
      | "face-devilish"
      | "face-embarrassed-symbolic"
      | "face-embarrassed"
      | "face-kiss-symbolic"
      | "face-kiss"
      | "face-laugh-symbolic"
      | "face-laugh"
      | "face-monkey-symbolic"
      | "face-monkey"
      | "face-plain-symbolic"
      | "face-plain"
      | "face-raspberry-symbolic"
      | "face-raspberry"
      | "face-sad-symbolic"
      | "face-sad"
      | "face-shutmouth-symbolic"
      | "face-shutmouth"
      | "face-sick-symbolic"
      | "face-sick"
      | "face-smile-big-symbolic"
      | "face-smile-big"
      | "face-smile-symbolic"
      | "face-smile"
      | "face-smirk-symbolic"
      | "face-smirk"
      | "face-surprise-symbolic"
      | "face-surprise"
      | "face-tired-symbolic"
      | "face-tired"
      | "face-uncertain-symbolic"
      | "face-uncertain"
      | "face-wink-symbolic"
      | "face-wink"
      | "face-worried-symbolic"
      | "face-worried"
      | "face-yawn-symbolic"
      | "face-yawn"
      | "find-location-symbolic"
      | "find-location"
      | "folder-documents-symbolic"
      | "folder-documents"
      | "folder-download-symbolic"
      | "folder-download"
      | "folder-drag-accept-symbolic"
      | "folder-drag-accept"
      | "folder-music-symbolic"
      | "folder-music"
      | "folder-new-symbolic"
      | "folder-new"
      | "folder-open-symbolic"
      | "folder-open"
      | "folder-pictures-symbolic"
      | "folder-pictures"
      | "folder-publicshare-symbolic"
      | "folder-publicshare"
      | "folder-remote-symbolic"
      | "folder-remote"
      | "folder-saved-search-symbolic"
      | "folder-saved-search"
      | "folder-symbolic"
      | "folder-templates-symbolic"
      | "folder-templates"
      | "folder-videos-symbolic"
      | "folder-videos"
      | "folder-visiting-symbolic"
      | "folder-visiting"
      | "folder"
      | "font-x-generic-symbolic"
      | "font-x-generic"
      | "format-indent-less-symbolic"
      | "format-indent-less"
      | "format-indent-more-symbolic"
      | "format-indent-more"
      | "format-justify-center-symbolic"
      | "format-justify-center"
      | "format-justify-fill-symbolic"
      | "format-justify-fill"
      | "format-justify-left-symbolic"
      | "format-justify-left"
      | "format-justify-right-symbolic"
      | "format-justify-right"
      | "format-text-bold-symbolic"
      | "format-text-bold"
      | "format-text-direction-ltr-symbolic"
      | "format-text-direction-ltr"
      | "format-text-direction-rtl-symbolic"
      | "format-text-direction-rtl"
      | "format-text-italic-symbolic"
      | "format-text-italic"
      | "format-text-strikethrough-symbolic"
      | "format-text-strikethrough"
      | "format-text-underline-symbolic"
      | "format-text-underline"
      | "go-bottom-symbolic"
      | "go-bottom"
      | "go-down-symbolic"
      | "go-down"
      | "go-first-symbolic"
      | "go-first"
      | "go-home-symbolic"
      | "go-home"
      | "go-jump-symbolic"
      | "go-jump"
      | "go-last-symbolic"
      | "go-last"
      | "go-next-symbolic"
      | "go-next"
      | "go-previous-symbolic"
      | "go-previous"
      | "go-top-symbolic"
      | "go-top"
      | "go-up-symbolic"
      | "go-up"
      | "help-about-symbolic"
      | "help-about"
      | "help-browser-symbolic"
      | "help-browser"
      | "help-contents-symbolic"
      | "help-contents"
      | "help-faq-symbolic"
      | "help-faq"
      | "image-loading-symbolic"
      | "image-loading"
      | "image-missing-symbolic"
      | "image-missing"
      | "image-x-generic-symbolic"
      | "image-x-generic"
      | "input-dialpad-symbolic"
      | "input-dialpad"
      | "input-gaming-symbolic"
      | "input-gaming"
      | "input-keyboard-symbolic"
      | "input-keyboard"
      | "input-mouse-symbolic"
      | "input-mouse"
      | "input-tablet-symbolic"
      | "input-tablet"
      | "input-touchpad-symbolic"
      | "input-touchpad"
      | "insert-image-symbolic"
      | "insert-image"
      | "insert-link-symbolic"
      | "insert-link"
      | "insert-object-symbolic"
      | "insert-object"
      | "insert-text-symbolic"
      | "insert-text"
      | "keyboard-brightness-symbolic"
      | "keyboard-brightness"
      | "list-add-symbolic"
      | "list-add"
      | "list-remove-all-symbolic"
      | "list-remove-all"
      | "list-remove-symbolic"
      | "list-remove"
      | "mail-attachment-symbolic"
      | "mail-attachment"
      | "mail-forward-symbolic"
      | "mail-forward"
      | "mail-mark-important-symbolic"
      | "mail-mark-important"
      | "mail-mark-junk-symbolic"
      | "mail-mark-junk"
      | "mail-mark-notjunk-symbolic"
      | "mail-mark-notjunk"
      | "mail-mark-read-symbolic"
      | "mail-mark-read"
      | "mail-mark-unread-symbolic"
      | "mail-mark-unread"
      | "mail-message-new-symbolic"
      | "mail-message-new"
      | "mail-read-symbolic"
      | "mail-read"
      | "mail-replied-symbolic"
      | "mail-replied"
      | "mail-reply-all-symbolic"
      | "mail-reply-all"
      | "mail-reply-sender-symbolic"
      | "mail-reply-sender"
      | "mail-send-receive-symbolic"
      | "mail-send-receive"
      | "mail-send-symbolic"
      | "mail-send"
      | "mail-signed-verified"
      | "mail-signed"
      | "mail-unread-symbolic"
      | "mail-unread"
      | "mark-location-symbolic"
      | "mark-location"
      | "media-eject-symbolic"
      | "media-eject"
      | "media-flash-symbolic"
      | "media-flash"
      | "media-floppy-symbolic"
      | "media-floppy"
      | "media-optical-bd-symbolic"
      | "media-optical-bd"
      | "media-optical-cd-audio-symbolic"
      | "media-optical-cd-audio"
      | "media-optical-dvd-symbolic"
      | "media-optical-dvd"
      | "media-optical-symbolic"
      | "media-optical"
      | "media-playback-pause-symbolic"
      | "media-playback-pause"
      | "media-playback-start-symbolic"
      | "media-playback-start"
      | "media-playback-stop-symbolic"
      | "media-playback-stop"
      | "media-playlist-consecutive-symbolic"
      | "media-playlist-consecutive"
      | "media-playlist-repeat-song-symbolic"
      | "media-playlist-repeat-song"
      | "media-playlist-repeat-symbolic"
      | "media-playlist-repeat"
      | "media-playlist-shuffle-symbolic"
      | "media-playlist-shuffle"
      | "media-record-symbolic"
      | "media-record"
      | "media-removable-symbolic"
      | "media-removable"
      | "media-seek-backward-symbolic"
      | "media-seek-backward"
      | "media-seek-forward-symbolic"
      | "media-seek-forward"
      | "media-skip-backward-symbolic"
      | "media-skip-backward"
      | "media-skip-forward-symbolic"
      | "media-skip-forward"
      | "media-tape-symbolic"
      | "media-tape"
      | "media-view-subtitles-symbolic"
      | "media-view-subtitles"
      | "media-zip-symbolic"
      | "media-zip"
      | "microphone-sensitivity-high-symbolic"
      | "microphone-sensitivity-high"
      | "microphone-sensitivity-low-symbolic"
      | "microphone-sensitivity-low"
      | "microphone-sensitivity-medium-symbolic"
      | "microphone-sensitivity-medium"
      | "microphone-sensitivity-muted-symbolic"
      | "microphone-sensitivity-muted"
      | "modem-symbolic"
      | "modem"
      | "multimedia-player-apple-ipod-touch-symbolic"
      | "multimedia-player-apple-ipod-touch"
      | "multimedia-player-symbolic"
      | "multimedia-player"
      | "multimedia-volume-control-symbolic"
      | "multimedia-volume-control"
      | "network-cellular-3g-symbolic"
      | "network-cellular-3g"
      | "network-cellular-4g-symbolic"
      | "network-cellular-4g"
      | "network-cellular-acquiring-symbolic"
      | "network-cellular-acquiring"
      | "network-cellular-connected-symbolic"
      | "network-cellular-connected"
      | "network-cellular-edge-symbolic"
      | "network-cellular-edge"
      | "network-cellular-gprs-symbolic"
      | "network-cellular-gprs"
      | "network-cellular-no-route-symbolic"
      | "network-cellular-no-route"
      | "network-cellular-offline-symbolic"
      | "network-cellular-offline"
      | "network-cellular-signal-excellent-symbolic"
      | "network-cellular-signal-excellent"
      | "network-cellular-signal-good-symbolic"
      | "network-cellular-signal-good"
      | "network-cellular-signal-none-symbolic"
      | "network-cellular-signal-none"
      | "network-cellular-signal-ok-symbolic"
      | "network-cellular-signal-ok"
      | "network-cellular-signal-weak-symbolic"
      | "network-cellular-signal-weak"
      | "network-cellular-umts-symbolic"
      | "network-cellular-umts"
      | "network-error-symbolic"
      | "network-error"
      | "network-idle-symbolic"
      | "network-idle"
      | "network-offline-symbolic"
      | "network-offline"
      | "network-receive-symbolic"
      | "network-receive"
      | "network-server-symbolic"
      | "network-server"
      | "network-transmit-receive-symbolic"
      | "network-transmit-receive"
      | "network-transmit-symbolic"
      | "network-transmit"
      | "network-vpn-acquiring-symbolic"
      | "network-vpn-acquiring"
      | "network-vpn-symbolic"
      | "network-vpn"
      | "network-wired-acquiring-symbolic"
      | "network-wired-acquiring"
      | "network-wired-disconnected-symbolic"
      | "network-wired-disconnected"
      | "network-wired-no-route-symbolic"
      | "network-wired-no-route"
      | "network-wired-offline-symbolic"
      | "network-wired-offline"
      | "network-wired-symbolic"
      | "network-wired"
      | "network-wireless-acquiring-symbolic"
      | "network-wireless-acquiring"
      | "network-wireless-connected-symbolic"
      | "network-wireless-connected"
      | "network-wireless-encrypted-symbolic"
      | "network-wireless-encrypted"
      | "network-wireless-hotspot-symbolic"
      | "network-wireless-hotspot"
      | "network-wireless-no-route-symbolic"
      | "network-wireless-no-route"
      | "network-wireless-offline-symbolic"
      | "network-wireless-offline"
      | "network-wireless-signal-excellent-symbolic"
      | "network-wireless-signal-excellent"
      | "network-wireless-signal-good-symbolic"
      | "network-wireless-signal-good"
      | "network-wireless-signal-none-symbolic"
      | "network-wireless-signal-none"
      | "network-wireless-signal-ok-symbolic"
      | "network-wireless-signal-ok"
      | "network-wireless-signal-weak-symbolic"
      | "network-wireless-signal-weak"
      | "network-wireless-symbolic"
      | "network-wireless"
      | "network-workgroup-symbolic"
      | "network-workgroup"
      | "night-light-symbolic"
      | "night-light"
      | "non-starred-symbolic"
      | "non-starred"
      | "object-flip-horizontal-symbolic"
      | "object-flip-horizontal"
      | "object-flip-vertical-symbolic"
      | "object-flip-vertical"
      | "object-rotate-left-symbolic"
      | "object-rotate-left"
      | "object-rotate-right-symbolic"
      | "object-rotate-right"
      | "object-select-symbolic"
      | "object-select"
      | "open-menu-symbolic"
      | "open-menu"
      | "package-x-generic-symbolic"
      | "package-x-generic"
      | "pan-down-symbolic"
      | "pan-down"
      | "pan-end-symbolic"
      | "pan-end"
      | "pan-start-symbolic"
      | "pan-start"
      | "pan-up-symbolic"
      | "pan-up"
      | "pda-symbolic"
      | "pda"
      | "phone-apple-iphone-symbolic"
      | "phone-apple-iphone"
      | "phone-symbolic"
      | "phone"
      | "preferences-desktop-accessibility-symbolic"
      | "preferences-desktop-accessibility"
      | "preferences-desktop-display-symbolic"
      | "preferences-desktop-display"
      | "preferences-desktop-font-symbolic"
      | "preferences-desktop-font"
      | "preferences-desktop-keyboard-shortcuts-symbolic"
      | "preferences-desktop-keyboard-shortcuts"
      | "preferences-desktop-keyboard-symbolic"
      | "preferences-desktop-keyboard"
      | "preferences-desktop-locale-symbolic"
      | "preferences-desktop-locale"
      | "preferences-desktop-multimedia"
      | "preferences-desktop-peripherals"
      | "preferences-desktop-personal"
      | "preferences-desktop-remote-desktop-symbolic"
      | "preferences-desktop-remote-desktop"
      | "preferences-desktop-screensaver-symbolic"
      | "preferences-desktop-screensaver"
      | "preferences-desktop-theme"
      | "preferences-desktop-wallpaper-symbolic"
      | "preferences-desktop-wallpaper"
      | "preferences-desktop"
      | "preferences-other-symbolic"
      | "preferences-other"
      | "preferences-system-network-symbolic"
      | "preferences-system-network"
      | "preferences-system-privacy-symbolic"
      | "preferences-system-privacy"
      | "preferences-system-symbolic"
      | "preferences-system-windows"
      | "preferences-system"
      | "printer-error-symbolic"
      | "printer-error"
      | "printer-network-symbolic"
      | "printer-network"
      | "printer-printing-symbolic"
      | "printer-printing"
      | "printer-symbolic"
      | "printer-warning-symbolic"
      | "printer-warning"
      | "printer"
      | "process-stop-symbolic"
      | "process-stop"
      | "rotation-allowed-symbolic"
      | "rotation-allowed"
      | "rotation-locked-symbolic"
      | "rotation-locked"
      | "scanner-symbolic"
      | "scanner"
      | "security-high-symbolic"
      | "security-high"
      | "security-low-symbolic"
      | "security-low"
      | "security-medium-symbolic"
      | "security-medium"
      | "semi-starred-symbolic"
      | "semi-starred"
      | "send-to-symbolic"
      | "send-to"
      | "software-update-available-symbolic"
      | "software-update-available"
      | "software-update-urgent-symbolic"
      | "software-update-urgent"
      | "star-new-symbolic"
      | "star-new"
      | "starred-symbolic"
      | "starred"
      | "start-here-symbolic"
      | "start-here"
      | "sync-error"
      | "sync-synchronizing"
      | "system-file-manager-symbolic"
      | "system-file-manager"
      | "system-help-symbolic"
      | "system-help"
      | "system-lock-screen-symbolic"
      | "system-lock-screen"
      | "system-log-out-symbolic"
      | "system-log-out"
      | "system-reboot-symbolic"
      | "system-reboot"
      | "system-run-symbolic"
      | "system-run"
      | "system-search-symbolic"
      | "system-search"
      | "system-shutdown-symbolic"
      | "system-shutdown"
      | "system-software-install-symbolic"
      | "system-software-install"
      | "system-software-update"
      | "system-users-symbolic"
      | "system-users"
      | "tab-new-symbolic"
      | "tab-new"
      | "task-due-symbolic"
      | "task-due"
      | "task-past-due-symbolic"
      | "task-past-due"
      | "text-html-symbolic"
      | "text-html"
      | "text-x-generic-symbolic"
      | "text-x-generic-template"
      | "text-x-generic"
      | "text-x-preview"
      | "text-x-script"
      | "tools-check-spelling-symbolic"
      | "tools-check-spelling"
      | "touchpad-disabled-symbolic"
      | "touchpad-disabled"
      | "trophy-bronze"
      | "trophy-gold"
      | "trophy-silver"
      | "uninterruptible-power-supply-symbolic"
      | "uninterruptible-power-supply"
      | "user-available-symbolic"
      | "user-available"
      | "user-away-symbolic"
      | "user-away"
      | "user-bookmarks-symbolic"
      | "user-bookmarks"
      | "user-busy-symbolic"
      | "user-busy"
      | "user-desktop-symbolic"
      | "user-desktop"
      | "user-home-symbolic"
      | "user-home"
      | "user-idle-symbolic"
      | "user-idle"
      | "user-info-symbolic"
      | "user-info"
      | "user-invisible-symbolic"
      | "user-invisible"
      | "user-offline-symbolic"
      | "user-offline"
      | "user-status-pending-symbolic"
      | "user-status-pending"
      | "user-trash-full-symbolic"
      | "user-trash-full"
      | "user-trash-symbolic"
      | "user-trash"
      | "utilities-system-monitor-symbolic"
      | "utilities-system-monitor"
      | "utilities-terminal-symbolic"
      | "utilities-terminal"
      | "video-display-symbolic"
      | "video-display"
      | "video-x-generic-symbolic"
      | "video-x-generic"
      | "view-continuous-symbolic"
      | "view-continuous"
      | "view-dual-symbolic"
      | "view-dual"
      | "view-fullscreen-symbolic"
      | "view-fullscreen"
      | "view-grid-symbolic"
      | "view-grid"
      | "view-list-symbolic"
      | "view-list"
      | "view-more-symbolic"
      | "view-more"
      | "view-paged-symbolic"
      | "view-paged"
      | "view-pin-symbolic"
      | "view-pin"
      | "view-refresh-symbolic"
      | "view-refresh"
      | "view-restore-symbolic"
      | "view-restore"
      | "view-sort-ascending-symbolic"
      | "view-sort-ascending"
      | "view-sort-descending-symbolic"
      | "view-sort-descending"
      | "view-wrapped-symbolic"
      | "view-wrapped"
      | "weather-clear-night-symbolic"
      | "weather-clear-night"
      | "weather-clear-symbolic"
      | "weather-clear"
      | "weather-few-clouds-night-symbolic"
      | "weather-few-clouds-night"
      | "weather-few-clouds-symbolic"
      | "weather-few-clouds"
      | "weather-fog-symbolic"
      | "weather-fog"
      | "weather-overcast-symbolic"
      | "weather-overcast"
      | "weather-severe-alert-symbolic"
      | "weather-severe-alert"
      | "weather-showers-scattered-symbolic"
      | "weather-showers-scattered"
      | "weather-showers-symbolic"
      | "weather-showers"
      | "weather-snow-symbolic"
      | "weather-snow"
      | "weather-storm-symbolic"
      | "weather-storm"
      | "weather-windy-symbolic"
      | "weather-windy"
      | "window-close-symbolic"
      | "window-close"
      | "window-maximize-symbolic"
      | "window-maximize"
      | "window-minimize-symbolic"
      | "window-minimize"
      | "window-new-symbolic"
      | "window-new"
      | "window-restore-symbolic"
      | "window-restore"
      | "x-office-address-book-symbolic"
      | "x-office-address-book"
      | "x-office-calendar-symbolic"
      | "x-office-calendar"
      | "x-office-document-symbolic"
      | "x-office-document-template"
      | "x-office-document"
      | "x-office-presentation-symbolic"
      | "x-office-presentation-template"
      | "x-office-presentation"
      | "x-office-spreadsheet-symbolic"
      | "x-office-spreadsheet-template"
      | "x-office-spreadsheet"
      | "x-package-repository"
      | "zoom-fit-best-symbolic"
      | "zoom-fit-best"
      | "zoom-in-symbolic"
      | "zoom-in"
      | "zoom-original-symbolic"
      | "zoom-original"
      | "zoom-out-symbolic"
      | "zoom-out";
  }
}

export {};
