import { DeleteForever } from '@mui/icons-material'
import { Box, IconButton, Typography } from '@mui/material'
import { useDropzone } from 'react-dropzone'
import { useTheme } from '@mui/material/styles';

import { thumbsWrapper, dropzone, thumb } from './styles';

const FileUpload = ({ files, errors, touched, setFieldValue }) => {
    const theme = useTheme();
    const { getRootProps, getInputProps } = useDropzone({
        accept: {
            'image/*': ['.jpeg', '.jpg', '.png'],
        },
        onDrop: (acceptedFile) => {
            const newFiles = acceptedFile.map(file => {
                return Object.assign(file, {
                    preview: URL.createObjectURL(file)
                })
            })

            setFieldValue('files', [...files, ...newFiles]);
        }
    })
    const handleRemoveFile = fileName => {
        const newFileState = files.filter(file => file.name !== fileName);
        setFieldValue('files', newFileState);
    }
    return (
        <>
            <Typography component="h6" variant="h6" color={errors && touched ? 'error' : "textPrimary"}>
                Imagens
            </Typography>
            <Typography component="div" variant="body2" color={errors && touched ? 'error' : "textPrimary"}>
                A primeira imagem é a foto principal do seu anúncio.
            </Typography>
            {
                errors && touched
                    ? <Typography variant='body2' color="error" gutterBottom>{errors}</Typography>
                    : null
            }
            <Box sx={thumbsWrapper}>
                <Box sx={dropzone(theme.palette.background.default)} {...getRootProps()}>
                    <input name='files' {...getInputProps()} />
                    <Typography variant="body2" color={errors && touched ? 'error' : "textPrimary"}>
                        Clique para adicionar ou arraste a imagem para aqui.
                    </Typography>
                </Box>
                {
                    files.map((file, index) => ((
                        <Box
                            key={file.name}
                            sx={thumb(`${file.preview}`)}>
                            {
                                index === 0 ?
                                    <Box className='mainImage'>
                                        <Typography variant="body" color="secondary">
                                            Principal
                                        </Typography>
                                    </Box>
                                    : null
                            }
                            <Box className="mask">
                                <IconButton color='secondary' onClick={() => handleRemoveFile(file.name)}>
                                    <DeleteForever fontSize='large' />
                                </IconButton>
                            </Box>
                        </Box>
                    )))
                }
            </Box>
        </>
    )
}
export default FileUpload;