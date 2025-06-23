"use client";
import Image from "next/image";
import Link from "next/link";
import DocumentInput from "@/app/documents/[documentId]/document-input";
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarShortcut,
  MenubarSub,
  MenubarSubContent,
  MenubarSubTrigger,
  MenubarTrigger,
} from "@/components/ui/menubar";
import {
  BoldIcon,
  FileIcon,
  FileJsonIcon,
  FilePenIcon,
  FilePlusIcon,
  FileTextIcon,
  GlobeIcon,
  ItalicIcon,
  PrinterIcon,
  Redo2Icon,
  RemoveFormattingIcon,
  StrikethroughIcon,
  TextIcon,
  TrashIcon,
  UnderlineIcon,
  Undo2Icon,
} from "lucide-react";
import { BsFilePdf } from "react-icons/bs";
import { CommandShortcut } from "@/components/ui/command";
import { useEditorStore } from "@/store/use-editor-store";

const Navbar = () => {
  const { editor } = useEditorStore();

  const insertTable = ({ rows, cols }: { rows: number; cols: number }) => {
    editor
      ?.chain()
      .focus()
      .insertTable({ rows, cols, withHeaderRow: false })
      .run();
  };

  const onDownload = (blob: Blob, fileName: string)=>{
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = fileName;
    a.click();
  }

  const onSaveJSON = ()=>{
    if(!editor) return;

    const content = editor.getJSON();
    const blob = new Blob([JSON.stringify(content)], { type: "application/json" });
    onDownload(blob, `document.json`) // TODO: Use document name
  }

  const onSaveHTML = ()=>{
    if(!editor) return;

    const content = editor.getHTML();
    const blob = new Blob([content], { type: "text/html" });
    onDownload(blob, `document.html`) // TODO: Use document name
  }

  const onSaveText = ()=>{
    if(!editor) return;

    const content = editor.getText();
    const blob = new Blob([content], { type: "text/plain" });
    onDownload(blob, `document.txt`) // TODO: Use document name
  }

  return (
    <nav className={"flex items-center justify-between"}>
      <div className={"flex gap-2 items-center"}>
        <Link href={"/"}>
          <Image
            src={"/logo.svg"}
            alt={"CloudQuill logo"}
            width={40}
            height={40}
          />
        </Link>
        <div className={"flex flex-col"}>
          <DocumentInput />
          <div className={"flex "}>
            <Menubar
              className={"border-none bg-transparent shadow-none h-auto p-0"}
            >
              <MenubarMenu>
                <MenubarTrigger
                  className={
                    "text-sm font-normal py-0.5 px-[7px] rounded-sm hover:bg-muted h-auto"
                  }
                >
                  File
                </MenubarTrigger>
                <MenubarContent className={"print:hidden"}>
                  <MenubarSub>
                    <MenubarSubTrigger>
                      <FileIcon className={"size-4 mr-2"} />
                      Save
                    </MenubarSubTrigger>
                    <MenubarSubContent>
                      <MenubarItem className="gap-2" onClick={onSaveJSON}>
                        <FileJsonIcon className={"size-4"} />
                        JSON
                      </MenubarItem>
                      <MenubarItem className="gap-2" onClick={onSaveHTML}>
                        <GlobeIcon className={"size-4"} />
                        HTML
                      </MenubarItem>
                      <MenubarItem className="gap-2" onClick={()=>window.print()}>
                        <BsFilePdf className={"size-4"} />
                        PDF
                      </MenubarItem>
                      <MenubarItem className="gap-2" onClick={onSaveText}>
                        <FileTextIcon className={"size-4"} />
                        Text
                      </MenubarItem>
                    </MenubarSubContent>
                  </MenubarSub>
                  <MenubarItem className="gap-2">
                    <FilePlusIcon className={"size-4"} />
                    New Document
                  </MenubarItem>
                  <MenubarSeparator />
                  <MenubarItem className="gap-2">
                    <FilePenIcon className={"size-4"} />
                    Rename
                  </MenubarItem>
                  <MenubarItem className="gap-2">
                    <TrashIcon className={"size-4"} />
                    Remove
                  </MenubarItem>
                  <MenubarSeparator />
                  <MenubarItem className="gap-2" onClick={() => window.print()}>
                    <PrinterIcon className={"size-4"} />
                    Print <MenubarShortcut>Ctrl/⌘ + P</MenubarShortcut>
                  </MenubarItem>
                </MenubarContent>
              </MenubarMenu>
              <MenubarMenu>
                <MenubarTrigger
                  className={
                    "text-sm font-normal py-0.5 px-[7px] rounded-sm hover:bg-muted h-auto"
                  }
                >
                  Edit
                </MenubarTrigger>
                <MenubarContent>
                  <MenubarItem
                    onClick={() => editor?.chain().focus().undo().run()}
                  >
                    <Undo2Icon className={"size-4 mr-2"} />
                    Undo <CommandShortcut>Ctrl/⌘ + z</CommandShortcut>
                  </MenubarItem>
                  <MenubarItem
                    onClick={() => editor?.chain().focus().redo().run()}
                  >
                    <Redo2Icon className={"size-4 mr-2"} />
                    Redo <CommandShortcut>Ctrl/⌘ + y</CommandShortcut>
                  </MenubarItem>
                </MenubarContent>
              </MenubarMenu>
              <MenubarMenu>
                <MenubarTrigger
                  className={
                    "text-sm font-normal py-0.5 px-[7px] rounded-sm hover:bg-muted h-auto"
                  }
                >
                  Insert
                </MenubarTrigger>
                <MenubarContent>
                  <MenubarSub>
                    <MenubarSubTrigger>Table</MenubarSubTrigger>
                    <MenubarSubContent>
                      <MenubarItem
                        onClick={() => insertTable({ rows: 1, cols: 1 })}
                      >
                        1 x 1
                      </MenubarItem>
                      <MenubarItem
                        onClick={() => insertTable({ rows: 2, cols: 2 })}
                      >
                        2 x 2
                      </MenubarItem>
                      <MenubarItem
                        onClick={() => insertTable({ rows: 3, cols: 3 })}
                      >
                        3 x 3
                      </MenubarItem>
                      <MenubarItem
                        onClick={() => insertTable({ rows: 4, cols: 4 })}
                      >
                        4 x 4
                      </MenubarItem>
                    </MenubarSubContent>
                  </MenubarSub>
                </MenubarContent>
              </MenubarMenu>
              <MenubarMenu>
                <MenubarTrigger
                  className={
                    "text-sm font-normal py-0.5 px-[7px] rounded-sm hover:bg-muted h-auto"
                  }
                >
                  Format
                </MenubarTrigger>
                <MenubarContent>
                  <MenubarSub>
                    <MenubarSubTrigger>
                      <TextIcon className={"size-4 mr-2"} />
                      Text
                    </MenubarSubTrigger>
                    <MenubarSubContent>
                      <MenubarItem onClick={()=>editor?.chain().toggleBold().run()}>
                        <BoldIcon className={"size-4 mr-2"} />
                        Bold <CommandShortcut>Ctrl/⌘ + b</CommandShortcut>
                      </MenubarItem>
                      <MenubarItem onClick={()=>editor?.chain().toggleItalic().run()}>
                        <ItalicIcon className={"size-4 mr-2"} />
                        Italic
                        <CommandShortcut>Ctrl/⌘ + i</CommandShortcut>
                      </MenubarItem>
                      <MenubarItem onClick={()=>editor?.chain().toggleUnderline().run()}>
                        <UnderlineIcon className={"size-4 mr-2"} />
                        Underline <CommandShortcut>Ctrl/⌘ + u</CommandShortcut>
                      </MenubarItem>
                      <MenubarItem onClick={()=>editor?.chain().toggleStrike().run()}>
                        <StrikethroughIcon className={"size-4 mr-2"} />
                        <span>Strikethrough&nbsp;&nbsp;</span>{" "}
                        <CommandShortcut>Ctrl/⌘ + s</CommandShortcut>
                      </MenubarItem>
                    </MenubarSubContent>
                  </MenubarSub>
                  <MenubarItem onClick={()=>editor?.chain().unsetAllMarks().run()}>
                    <RemoveFormattingIcon className={"size-4 mr-2"} />
                    Clear Formatting
                  </MenubarItem>
                </MenubarContent>
              </MenubarMenu>
            </Menubar>
          </div>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
