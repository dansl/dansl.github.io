# Linux OS Stuff
Here's a list of all my favorite Linux apps, tips, and tricks. My current distro I prefer is [Manjaro](https://manjaro.org). Manjaro is a community-driven Linux distribution based on Arch Linux.

## Linux Apps
| Name | Price | Note |
| --- | --- | --- |
| [Alpaca](https://github.com/Jeffser/Alpaca) | FREE | A simple chat style app for communicating with a local or remote AI model. |
| [Blender](https://www.blender.org) | FREE | 3D modeling applicaiton. |
| [Berty](https://berty.tech) | FREE | Open-source decentralized messaging app with end-to-end encryption. |
| [Bottles](https://usebottles.com) | FREE | Run Windows applications on Linux with WINE. |
| [DarkReader](https://darkreader.org) | FREE | Makes all websites have a dark theme. |
| [DaVinci Resolve](https://www.blackmagicdesign.com/products/davinciresolve) | FREE | Very advanced and well made video editor. |
| [Discord](https://discord.com) | FREE | Chat app that supports audio/video/text for large groups, tailored to Gaming. |
| [FileZilla](https://filezilla-project.org) | FREE | Graphical FTP client for transferring files. |
| [Firefox](https://www.mozilla.org/firefox) | FREE | Mozilla's browser, with a focus on privacy and security. |
| [FreeCAD](https://www.freecad.org) | FREE | Open-Source 3D CAD software for engineering. |
| [Game Devices Udev](https://codeberg.org/fabiscafe/game-devices-udev) | FREE | Hardware profiles for uncommon game controllers. |
| [GBStudio](https://www.gbstudio.dev) | FREE | Open-Source Game Development Studio for Game Boy and Game Boy Color. |
| [Github Desktop](https://desktop.github.com/download/) | FREE | Manage your Github Repos easily. |
| [Handbrake](https://handbrake.fr) | FREE | Simple video converter and compressor app. |
| [Heroic](https://heroicgameslauncher.com) | FREE | Open Source Epic, GOG and Amazon Prime Games launcher. |
| [Kiwix](https://kiwix.org/en/) | FREE | Store local copies of Wikipedia on your PC. |
| [Lutris](https://lutris.net) | FREE | Open-Source Game Launcher for Linux. |
| [Motrix](https://motrix.app) | FREE | Download manager that will pull downloads off servers faster by using multiple streams. |
| [MusicBrainz Picard](https://picard.musicbrainz.org) | FREE | Music collection metadata manager. |
| [Ollama](https://ollama.com) | FREE | Run AI LLMs locally on your PC. |
| [OrcaSlicer](https://github.com/SoftFever/OrcaSlicer) | FREE | 3D model slicer for prepping your models to 3D Print. |
| [Plex](https://www.plex.tv) | FREE | Media server that will stream your music, movies and TV shows to any device. |
| [Plexamp](https://www.plex.tv/plexamp/) | FREE | Music streaming app that will stream music from your Plex server. Also has AI playlist generation. |
| [Postman](https://www.postman.com) | FREE | API testing and development tool. |
| [Reaper](https://www.reaper.fm) | FREE | Powerful audio editing tool. |
| [RetroArch](https://www.retroarch.com) | FREE | Emulator frontend for retro gaming. |
| [Signal](https://signal.org) | FREE | Secure messaging app. |
| [Spotify](https://www.spotify.com) | FREE | Music streaming service. |
| [Sink It](https://gosinkit.com) | FREE | Makes Reddit less crappy... |
| [Steam](https://store.steampowered.com) | FREE | Gaming app with all the games! |
| [SyncThing](https://syncthing.net) | FREE | Sync files between devices without a Cloud. |
| [Tailscale](https://tailscale.com) | FREE | Simple to use local VPN for secure remote access to your home network. |
| [Transmission](https://transmissionbt.com) | FREE | BitTorrent client. |
| [VLC](https://www.videolan.org/vlc/) | FREE | Media player. |
| [WireShark](https://www.wireshark.org) | FREE | Network protocol analyzer. |
| [Zed](https://zed.dev) | FREE | Amazing text editor and development IDE with local AI support and much much more. |

## Linux Tips and Tricks

### Terminal Tips

- Drag any file into a Terminal window to input its path.

- In terminal, you can add "man" before any command to read it's manual page. For example.
  ```
  man ls
  ```
  Now you can see how to use the ls command, scrolling with your mouse or arrow keys and press 'q' key to quit.

- Download files without a browser - Set the location you want the file to be downloaded and then download the file with curl.
  ```
  cd ~/Downloads/
  curl -O [the URL of the file]
  ```

- List the Contents of a folder - The ‘ls’ command displays the contents of a directory, by adding ‘-R’ it expands sub-folders. So to see all the contents of a folder, type:
  ```
  ls -R [the path of the directory]
  ```
  Adding '-lr' will also show the file size and permissions.
  ```
  ls -lr [the path of the directory]
  ```

- View any file’s contents - For lots of files, like audio and video, the text you see won’t mean much. For others, there may be just enough for you to parse what you need.
  ```
  cat [file path]
  ```

- How to alter file permissions using Terminal - File permissions control which users can access and modify files and folders. When you copy a file from one user account to another and discover you can’t open in it in your account. Use chmod, which modifies permissions for all users except the file’s owner, and chown which assigns ownership to a specific user.
  ```
  sudo chmod 777 path-to-file
  ```
  To modify the permissions to allow access and reading, but prohibit editing the file, swap 777 for 644. If you want to change permissions on all the files in a folder, type -R after the command name. To change ownership of a file to your account, use:
  ```
  sudo chown your-short-user-name path-to-file
  ```

- Search and use the old commands - You can search for a command in the history using any search term. Just use the keys ctrl+r to initiate reverse search and type some part of the command.
  ```
  ctrl+r search_term
  ```
  By default, it will show just one result. To see more results matching your search term, hit ctrl+r again and again. To quit reverse search, use Ctrl+C.

- Unfreeze your terminal - If you hit Ctrl+S, your terminal will freeze. Just use Ctrl+Q and you can use the terminal again.
  ```
  ctrl+Q
  ```

- Move to the beginning or end of lines - You can use Home and End keys here of course but alternatively, you can use Ctrl+A to go to the beginning of the line and Ctrl+E to go to the end.

- Delete the entire line from cursor position - You press Ctrl+U, it deletes everything from your current cursor position to the beginning of the line. Similarly, if you press Ctrl+K, it deletes everything from your cursor position to the end of the line.

- Reading a log file in real time - In situations where you need to analyze the logs while the application is running, you can use the tail command with -f option.
  ```
  tail -f path_to_Log
  ```
  You can also use the regular grep options to display only those lines that are meaningful to you:
  ```
  tail -f path_to_log | grep search_term
  ```
  You can also use the option -f here. This will keep the tail running even if the log file is deleted. So if the log file is created again, tail will continue logging.

- Reading compressed logs without extracting - Server logs are usually gzip compressed to save disk space. Z commands provide alternatives of the regular commands that you use to deal with log files such as less, cat, grep etc. So you get
  ```
  zless, zcat, zgrep, etc.
  ```

- Use less to read files - To see the contents of a file, cat is not the best option especially if it is a big file. cat command will display the entire file on your screen. If you just want to read a file, less command is a far better choice.
  ```
  less path_to_file
  ```

- Reuse the last item from the previous command with !$
  ```
  ls Tools/
  cd !$
  ```
  This would use "Tools/" in place of !$. A better way to do the same is to use alt+period. You can use period a number of times to shuffle between the options of the last commands.

- Reuse the previous command in present command with !! - You can call the entire previous command with !!. This is particularly useful when you have to run a command and realize that it needs root privileges.
  ```
  apt install vlc
  sudo !!
  ```

- Using alias to fix typos. This way you won’t have to retype the command again.
  ```
  alias gerp=grep
  ```

- Copy and paste in Linux terminal - In general, you should be able to copy paste in terminal with these shortcuts:
  - Select the text for copying and right click for paste.
  - Select the text for copying and middle click for paste.
  - Ctrl+Shift+C for copy and Ctrl+Shift+V for paste.

- Kill a running command/process - Press Ctrl+C to stop that running command. If for some reason that doesn't work, you can try Ctrl+Z or even Ctrl+X in some cases.

- Using yes command for commands or scripts that need interactive response - If some commands or scripts need user interaction and you know that you have to enter Y each time it requires input, you can use the Yes command. Just use it in the below fashion:
  ```
  yes | command_or_script
  ```

- Find if there are files containing a particular text - There are multiple ways to search and find in command line. But in the case when you just want to see if there are files that contain a particular text, you can use this command:
  ```
  grep -Pri Search_Term path_to_directory
  ```

- Using help with any command - Almost all command and command line tools come with a help page that shows how to use the command. Often using help will tell you the primary usage of the tool/command.
  ```
  command_tool --help
  ```

- Running multiple commands in one command - You can use the ";" separator for running multiple commands on the same line:
  ```
  command_1; command_2; command_3
  ```

- Run multiple commands in one command only if the previous command was successful - The && ensures that the following command will only be executed when the previous command was successful:
  ```
  command_1 && command_2
  ```

- Show the current directory you are in.
  ```
  pwd
  ```

- View disk space - To understand how much space is left on which disk, enter:
  ```
  df-h
  ```

- Repeating a command until it successfully completes - To run a command until it completes successfully use the command's return code in this construct:
  ```
  while! [command]; do sleep 1; done
  ```

- Cleaning the Console - The clear command clears the terminal screen. The keyboard shortcut Ctrl + L allows you to achieve the same thing faster.

- Keep Your Program Running in the Background - If you run the program in a terminal, it will be killed as soon as you end your terminal session. To prevent this and keep the program running, use the nohup command. Example: Transfer files to and from the server using scp and be sure that the transfer will continue even if you accidentally close the terminal window, use this command:
  ```
  nohup scp very-big-file.mov user@server-ip:~/very-big-file.mov
  ```
  nohup also creates a file called nohup.out to store the output of the command.

### Terminal Apps and Plugins

These are ways to make your terminal more efficient and more enjoyable!

- [bat](https://github.com/sharkdp/bat) - bat is a replacement for cat command so you can view files in command line with syntax highlighting.
- [btop](https://github.com/aristocratos/btop) - btop is a replacement for top command that displays system resources and running tasks information with syntax highlighting.
- [eza](https://github.com/eza-community/eza) - eza is a replacement for ls command that displays files and folders with syntax highlighting.
- [fd](https://github.com/sharkdp/fd) - fd is a simple, fast and user-friendly alternative to the find command.
- [navi](https://github.com/denisidoro/navi) - navi is a cheatsheet for your terminal. Download community made cheatsheets with various commonly used command snippets and examples, and easily search for them to use.
- [zsh-autosuggestions](https://github.com/zsh-users/zsh-autosuggestions) - zsh-autosuggestions is a plugin for zsh that provides auto-suggestions based on your command history.
- [zsh-syntax-highlighting](https://github.com/zsh-users/zsh-syntax-highlighting) - zsh-syntax-highlighting is a plugin for zsh that provides syntax highlighting for commands.

Thanks for reading. [Follow me](https://bsky.app/profile/dansnull.bsky.social) for more!
